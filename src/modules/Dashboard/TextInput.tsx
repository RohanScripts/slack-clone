import { ChannelContext } from "@/context/channelContext";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useContext, useState } from "react";

export const TextInput = () => {
  const channelContext = useContext(ChannelContext);
  if (!channelContext) throw new Error("ChannelContext is not defined");
  const [input, setInput] = useState("");
  const firestore = getFirestore();

  const userAuth = getAuth();
  const user = userAuth.currentUser;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit();
      e.preventDefault();
    }
  };

  const handleSubmit = async () => {
    if (input.trim() === "") return;
    console.log(input);
    setInput("");
    try {
      await addDoc(
        collection(
          firestore,
          "channels",
          channelContext?.channelId,
          "messages"
        ),
        {
          message: input.trim(),
          sender: user?.displayName,
          timestamp: serverTimestamp(),
        }
      );
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="w-full rounded-lg border  shadow-sm">
      <div className="px-4 py-2">
        <textarea
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full outline-none h-24 overflow-auto resize-none"
          placeholder="Type your message..."
          rows={1}
        />
      </div>
    </div>
  );
};
