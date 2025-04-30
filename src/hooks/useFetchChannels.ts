import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Channels {
  id: string;
  channelName: string;
}

export const useFetchChannels = () => {
  const [channels, setChannels] = useState<Channels[]>([]);
  const fetchChannels = async () => {
    const receivedData = await getDocs(collection(db, "channels"));
    const channelsData = receivedData.docs.map((eachChannel) => ({
      id: eachChannel.id,
      channelName: eachChannel.data().channelName,
    }));
    setChannels(channelsData);
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  return { channels };
};
