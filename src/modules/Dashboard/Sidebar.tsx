import { ChevronDown, CircleUser, Hash, NotebookPen, Plus } from "lucide-react";
import { MenuItems } from "./MenuItems";
import { DialogBox } from "./DialogBox";
import { useCreateChannel } from "@/hooks/useCreateChannel";
import { useContext, useState } from "react";
import { useFetchChannels } from "@/hooks/useFetchChannels";
import { ChannelContext } from "@/context/channelContext";
import { useFetchUsers } from "@/hooks/useFetchUsers";

export const Sidebar = () => {
  const [channelName, setChannelName] = useState("");
  const { isLoading, createChannel } = useCreateChannel();
  const { channels } = useFetchChannels();
  const {users} = useFetchUsers()
  const channelContext = useContext(ChannelContext);

  const handleCreateChannel = () => {
    createChannel(channelName, () => setChannelName(""));
  };

  const handleChannelClick = (channelId: string, channelName: string) => {
    channelContext?.setChannelId(channelId);
    channelContext?.setChannelName(channelName);
    channelContext?.setIsDM(false);
  };

  const handleUserClick = (userId: string, userName: string) => {
    channelContext?.setChannelId(userId); 
    channelContext?.setChannelName(userName);
    channelContext?.setIsDM(true); 
  };

  return (
    <div className="w-1/5 h-[calc(100vh-48px)] bg-[#3A123E]">
      <hr className="border-DividerSlidebar" />
      <div className="flex items-center px-4">
        <div className="w-full h-12 flex items-center cursor-pointer">
          <p className="text-white">Webelight Solutions</p>
          <ChevronDown color="white" />
        </div>
        <div className="w-7 h-7 bg-white flex justify-center items-center rounded-xl p-1 cursor-pointer">
          <NotebookPen strokeWidth={1.5} />
        </div>
      </div>
      <hr className="border-DividerSlidebar" />
     {/* users */}
     <div className="flex items-center px-4 flex-col">
      <div className="w-full h-12 flex items-center cursor-pointer gap-1">
          <p className="text-white">Direct Messages</p>
      </div>
      {users.map((eachUser)=>(
        <MenuItems onclick={() => handleUserClick(eachUser.id, eachUser.userName)} icon={<CircleUser size={20} className="text-white/80" />} label={eachUser.userName} />
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
            selected={channelContext?.channelId === eachChannel.id}
            onclick={() =>
              handleChannelClick(eachChannel.id, eachChannel.channelName)
            }
            key={eachChannel.id}
            icon={<Hash className="text-white/80" />}
            label={eachChannel.channelName}
          />
        ))}
      </div>
    </div>
  );
};
