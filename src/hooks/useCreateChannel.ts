import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export const useCreateChannel = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createChannel = async (channelName: string, onSuccess: () => void) => {
    console.log("Channel submitted:", channelName);

    setIsLoading(true);
    try {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    } catch (err) {
      console.log("Error adding channel:", err);
    } finally {
      setIsLoading(false);
      onSuccess();
    }
  };

  return { isLoading, createChannel };
};
