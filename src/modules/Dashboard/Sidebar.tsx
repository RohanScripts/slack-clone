import { ChevronDown, CircleUser, Hash, Plus } from "lucide-react";
import { MenuItems } from "./MenuItems";
import { DialogBox } from "./DialogBox";
import { useCreateChannel } from "@/hooks/useCreateChannel";
import { useContext, useState } from "react";
import { useFetchChannels } from "@/hooks/useFetchChannels";
import { ChannelContext } from "@/context/channelContext";
import { useFetchUsers } from "@/hooks/useFetchUsers";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

export const Sidebar = () => {
  const [channelName, setChannelName] = useState("");
  const { isLoading, createChannel } = useCreateChannel();
  const { channels } = useFetchChannels();
  const { users } = useFetchUsers();
  const channelContext = useContext(ChannelContext);

  const userAuth = getAuth();
  const user = userAuth.currentUser;

  const handleCreateChannel = () => {
    createChannel(channelName, () => setChannelName(""));
  };

  const handleChannelClick = (channelId: string, channelName: string) => {
    channelContext?.setChannelId(channelId);
    channelContext?.setChannelName(channelName);
    channelContext?.setIsDM(false);
  };

  let currentUserId = "";

  users.forEach((eachuser) => {
    if (eachuser.email === user?.email) {
      currentUserId = eachuser.id;
    }
  });

  const handleUserClick = async (userId: string, userName: string) => {
    channelContext?.setChannelName(userName);
    channelContext?.setIsDM(true);

    try {
      const q1 = query(
        collection(db, "directMessages"),
        where("senderId", "==", currentUserId),
        where("receiverId", "==", userId)
      );

      const q2 = query(
        collection(db, "directMessages"),
        where("senderId", "==", userId),
        where("receiverId", "==", currentUserId)
      );

      const docs1 = await getDocs(q1);
      const docs2 = await getDocs(q2);

      let chatId = "";

      if (!docs1.empty) {
        chatId = docs1.docs[0].id;
      } else if (!docs2.empty) {
        chatId = docs2.docs[0].id;
      } else {
        const docRef = await addDoc(collection(db, "directMessages"), {
          receiverId: userId,
          senderId: currentUserId,
        });
        chatId = docRef.id;
      }

      channelContext?.setChannelId(chatId);
      channelContext?.setChatId(chatId);
    } catch (error) {
      console.log("Error handling DM:", error);
    }
  };

  return (
    <div className="w-1/5 h-[calc(100vh-48px)] bg-[#3A123E]">
      <hr className="border-DividerSlidebar" />
      <div className="flex  px-4 flex-col">
        <div className="w-full h-10 flex items-center cursor-pointer">
          <p className="text-white">Webelight Solutions</p>
          <ChevronDown color="white" />
        </div>
        <div className="w-full h-10 flex items-center cursor-pointer">
          <p className="text-white">Hello, {user?.displayName}</p>
        </div>
      </div>
      <hr className="border-DividerSlidebar" />
      {/* users */}
      <div className="flex items-center px-4 flex-col">
        <div className="w-full h-12 flex items-center cursor-pointer gap-1">
          <p className="text-white">Direct Messages</p>
        </div>
        {users.map((eachUser) => (
          <MenuItems
            key={eachUser.id}
            onclick={() => handleUserClick(eachUser.id, eachUser.userName)}
            icon={<CircleUser size={20} className="text-white/80" />}
            label={eachUser.userName}
          />
        ))}
      </div>

      <hr className="border-DividerSlidebar mt-1 mb-1" />
      {/* channels */}
      <div className="flex items-center px-4 flex-col">
        <DialogBox
          loading={isLoading}
          trigger={
            <div className="w-full h-12 flex items-center cursor-pointer gap-1">
              <p className="text-white">Channels</p>
              <Plus size={19} color="white" />
            </div>
          }
          title="Create Channel"
          placeholder="Enter channel name"
          onInputChange={setChannelName}
          onSubmit={handleCreateChannel}
        />
        {channels.map((eachChannel) => (
          <MenuItems
            key={eachChannel.id}
            selected={channelContext?.channelId === eachChannel.id}
            onclick={() =>
              handleChannelClick(eachChannel.id, eachChannel.channelName)
            }
            icon={<Hash className="text-white/80" />}
            label={eachChannel.channelName}
          />
        ))}
      </div>
    </div>
  );
};
