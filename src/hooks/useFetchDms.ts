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

export const useFetchDms = () => {
  const channelContext = useContext(ChannelContext);
  const [dms, setDms] = useState<MessagesTypes[]>([]);
  const firestore = getFirestore();

  useEffect(() => {
    if (!channelContext?.chatId) return;

    const q = query(
      collection(firestore, "directMessages", channelContext.chatId, "dms"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setDms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as MessagesTypes)));
    });

    return () => unsubscribe();
  }, [channelContext?.channelId]);

  return { dms };
};
