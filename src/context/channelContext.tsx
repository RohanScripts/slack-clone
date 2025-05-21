import { createContext, useState, ReactNode } from "react";

type PresenceStatus = {
  [userId: string]: {
    state: "online" | "offline";
    last_changed: number;
  };
};

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
  onlineStatus: PresenceStatus;
  setOnlineStatus: React.Dispatch<React.SetStateAction<PresenceStatus>>;
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
  const [onlineStatus, setOnlineStatus] = useState({});

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
        onlineStatus,
        setOnlineStatus,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
