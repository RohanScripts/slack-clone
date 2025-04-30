import { CircleUser, Hash, Inbox } from "lucide-react";
import { TextInput } from "./TextInput";
import { useContext, useEffect, useRef } from "react";
import { ChannelContext } from "@/context/channelContext";
import { useFetchMessages } from "@/hooks/useFetchMessages";
import { useFetchDms } from "@/hooks/useFetchDms";

export const Dashboard = () => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const channelContext = useContext(ChannelContext);
  const { messages } = useFetchMessages();
  const { dms } = useFetchDms();

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  let lastRenderedDate: string | null = null;

  return (
    <div className="w-full h-[calc(100vh-48px)] flex flex-col">
      {channelContext?.channelId ? (
        <>
          <div className="w-full flex-1 h-12 flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-1 shrink-0">
              {channelContext.isDM ? <CircleUser /> : <Hash />}

              <p className="text-lg">{channelContext?.channelName}</p>
            </div>
            <div className="ml-4">
              <p className="text-xs text-headerText whitespace-nowrap">
                A central place to organize meetups, coffee chats, and
                networking in your town!
              </p>
            </div>
          </div>
          <hr />
          {channelContext.isDM ? (
            <div className="p-4 h-full overflow-y-auto">
              {dms.map((eachMessage) => {
                if (!eachMessage.timestamp) return null;
                const currentDate = formatDate(eachMessage.timestamp.toDate());
                const showDate = currentDate !== lastRenderedDate;
                lastRenderedDate = currentDate;

                return (
                  <div key={eachMessage.id}>
                    {showDate && (
                      <div className="flex justify-center my-6">
                        <div className="text-sm  text-gray-700 px-4 py-1 border border-gray-400 rounded-full shadow-sm">
                          {currentDate}
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <div className="flex items-center gap-3">
                        <p className="text-base font-bold">
                          {eachMessage.sender}
                        </p>
                        <p className="text-xs text-gray-500">
                          {eachMessage.timestamp.toDate().toLocaleString([], {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <div>
                        <p>{eachMessage.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messageEndRef} />
            </div>
          ) : (
            <div className="p-4 h-full overflow-y-auto">
              {messages.map((eachMessage) => {
                if (!eachMessage.timestamp) return null;
                const currentDate = formatDate(eachMessage.timestamp.toDate());
                const showDate = currentDate !== lastRenderedDate;
                lastRenderedDate = currentDate;

                return (
                  <div key={eachMessage.id}>
                    {showDate && (
                      <div className="flex justify-center my-6">
                        <div className="text-sm  text-gray-700 px-4 py-1 border border-gray-400 rounded-full shadow-sm">
                          {currentDate}
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <div className="flex items-center gap-3">
                        <p className="text-base font-bold">
                          {eachMessage.sender}
                        </p>
                        <p className="text-xs text-gray-500">
                          {eachMessage.timestamp.toDate().toLocaleString([], {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <div>
                        <p>{eachMessage.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messageEndRef} />
            </div>
          )}

          <div className="flex-1 flex flex-col justify-end px-4 pb-4">
            <TextInput />
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <Inbox size={48} className="text-purple-400 mb-2 animate-bounce" />
          <h2 className="text-2xl font-semibold text-purple-600">
            No Channel Selected
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-md">
            Please select a channel from the sidebar to view messages or start a
            new conversation.
          </p>
        </div>
      )}
    </div>
  );
};
