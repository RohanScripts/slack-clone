// hooks/useFetchMessages.ts
import { ChannelContext } from "@/context/channelContext";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

export const useFetchMessages = () => {
  const channelContext = useContext(ChannelContext);
  const [messages, setMessages] = useState<DocumentData[]>([]);
  const firestore = getFirestore();

  useEffect(() => {
    if (!channelContext?.channelId) return;

    const q = query(
      collection(firestore, "channels", channelContext.channelId, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [channelContext?.channelId]);

  return { messages };
};
