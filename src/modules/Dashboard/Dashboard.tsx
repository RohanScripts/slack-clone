import { ChevronDown, Hash } from "lucide-react";
import { TextInput } from "./TextInput";
import { useContext, useEffect, useRef } from "react";
import { ChannelContext } from "@/context/channelContext";
import { useFetchMessages } from "@/hooks/useFetchMessages";

export const Dashboard = () => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const channelContext = useContext(ChannelContext);
  const { messages } = useFetchMessages();
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="w-full  h-[calc(100vh-48px)] flex flex-col">
      <div className="w-full flex-1 h-12 flex items-center justify-between px-4">
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

      <div className="p-4 h-full overflow-y-auto">
        {messages.map(
          (eachMessage) =>
            eachMessage.timestamp && (
              <div key={eachMessage.id} className="">
                <div className="flex items-center gap-3">
                  <p className="text-base font-bold">{eachMessage.sender}</p>
                  <p>
                    {eachMessage.timestamp
                      ? eachMessage.timestamp.toDate().toLocaleString([], {
                          hour: "numeric",
                          minute: "2-digit",
                        })
                      : "Unknown time"}
                  </p>
                </div>
                <div>
                  <p>{eachMessage.message}</p>
                </div>
              </div>
            )
        )}
        <div ref={messageEndRef} />
      </div>

      <div className="flex-1 flex flex-col justify-end px-4 pb-4">
        <TextInput />
      </div>
    </div>
  );
};
