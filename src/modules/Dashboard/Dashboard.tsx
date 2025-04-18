import { ChevronDown, Hash } from "lucide-react";
import { TextInput } from "./TextInput";
import { useContext } from "react";
import { ChannelContext } from "@/context/channelContext";
import { useFetchMessages } from "@/hooks/useFetchMessages";

export const Dashboard = () => {
  const channelContext = useContext(ChannelContext);
  const { messages } = useFetchMessages();
  return (
    <div className="w-full  h-[calc(100vh-48px)] flex flex-col">
      <div className="w-full h-12 flex items-center justify-between px-4">
        <div className="flex items-center gap-1 shrink-0">
          <Hash />
          <p className="text-lg">{channelContext?.channelName}</p>
          <ChevronDown />
        </div>
        <div className="ml-4">
          <p className="text-xs text-headerText whitespace-nowrap">
            A central place to organize meetups, coffee chats, and networking in
            your town!
          </p>
        </div>
      </div>

      <div className="p-4">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <p className="text-sm font-semibold">{msg.sender}</p>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col justify-end px-4 pb-4">
        <TextInput />
      </div>
    </div>
  );
};
