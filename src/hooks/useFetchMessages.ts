import { ChannelContext } from "@/context/channelContext";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

interface MessagesTypes{
  id: string
  message: string
  sender: string
  timestamp: Timestamp 
}

export const useFetchMessages = () => {
  const channelContext = useContext(ChannelContext);
  const [messages, setMessages] = useState<MessagesTypes[]>([]);
  const firestore = getFirestore();

  useEffect(() => {
    if (!channelContext?.channelId) return;

    const q = query(
      collection(firestore, "channels", channelContext.channelId, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as MessagesTypes)));
    });

    return () => unsubscribe();
  }, [channelContext?.channelId]);

  return { messages };
};
