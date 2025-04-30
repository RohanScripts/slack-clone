import { createContext, useState, ReactNode } from "react";

interface ChannelContextType {
  channelId: string;
  setChannelId: (id: string) => void;
  channelName: string;
  setChannelName: (id: string) => void;
  isDM: boolean;
  setIsDM: (value: boolean) => void;
  chatId: string;
  setChatId: (value: string) => void;
  isMobileMenu: boolean;
  setIsMobileMenu: (value: boolean) => void;
}

export const ChannelContext = createContext<ChannelContextType | undefined>(
  undefined
);

export const ChannelProvider = ({ children }: { children: ReactNode }) => {
  const [channelId, setChannelId] = useState("");
  const [channelName, setChannelName] = useState("");
  const [isDM, setIsDM] = useState(false);
  const [chatId, setChatId] = useState("");
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <ChannelContext.Provider
      value={{
        channelId,
        setChannelId,
        channelName,
        setChannelName,
        isDM,
        setIsDM,
        chatId,
        setChatId,
        isMobileMenu,
        setIsMobileMenu,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
