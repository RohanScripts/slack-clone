// usePresence.js
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onDisconnect, set } from "firebase/database";

const usePresence = () => {
  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    onAuthStateChanged(auth, (user) => {
      if (!user) return;

      const userStatusRef = ref(db, `/status/${user.uid}`);
      const isOffline = { state: "offline", last_changed: Date.now() };
      const isOnline = { state: "online", last_changed: Date.now() };

      onDisconnect(userStatusRef).set(isOffline).then(() => {
        set(userStatusRef, isOnline);
      });
    });
  }, []);
};

export default usePresence;
