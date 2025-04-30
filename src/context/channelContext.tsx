import { createContext, useState, ReactNode } from "react";

interface ChannelContextType {
  channelId: string;
  setChannelId: (id: string) => void;
  channelName: string;
  setChannelName: (id: string) => void;
}

export const ChannelContext = createContext<ChannelContextType | undefined>(
  undefined
);

export const ChannelProvider = ({ children }: { children: ReactNode }) => {
  const [channelId, setChannelId] = useState("");
  const [channelName, setChannelName] = useState("");

  return (
    <ChannelContext.Provider
      value={{ channelId, setChannelId, channelName, setChannelName }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
