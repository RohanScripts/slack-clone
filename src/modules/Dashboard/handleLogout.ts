import { db } from "@/firebase";
import { toast } from "@/hooks/use-toast";
import { getAuth, signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export const handleLogout = async (onSuccess: () => void) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user?.uid) {
    console.log("No user is currently logged in.");
    return;
  }

  try {
    await updateDoc(doc(db, "users", user.uid), {
      onlineStatus: false,
    });
    await signOut(auth)
      .then(() => {
        console.log("loggedout", user.uid);
        onSuccess();
        toast({
          title: "Logged out",
          variant: "success",
          duration: 3000,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
