import { ChevronDown, Hash, NotebookPen } from "lucide-react";
import { MenuItems } from "./MenuItems";
import { menuItemsArray } from "@/modules/Dashboard/menuItemsArray";
import { DialogBox } from "./DialogBox";
import { useCreateChannel } from "@/hooks/useCreateChannel";
import { useState } from "react";
import { useFetchChannels } from "@/hooks/useFetchChannels";

export const Sidebar = () => {
  const [channelName, setChannelName] = useState("");
  const { isLoading, createChannel } = useCreateChannel();
  const { channels } = useFetchChannels();

  console.log(channels);

  const handleCreateChannel = () => {
    createChannel(channelName, () => setChannelName(""));
  };

  return (
    <div className="w-1/5 h-screen bg-[#3A123E]">
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
      {/* menu */}
      <div className="px-2 py-3 flex flex-col">
        {menuItemsArray.map((item, index) => (
          <MenuItems
            key={index}
            icon={item.icon}
            label={item.label}
            count={item.count}
          />
        ))}
      </div>
      <hr className="border-DividerSlidebar" />
      {/* channels */}
      <div className="flex items-center px-4 flex-col">
        <DialogBox
          loading={isLoading}
          trigger={
            <div className="w-full h-12 flex items-center cursor-pointer">
              <p className="text-white">Channels</p>
              <ChevronDown color="white" />
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
            icon={<Hash className="text-white/80" />}
            label={eachChannel.channelName}
          />
        ))}
      </div>
    </div>
  );
};
