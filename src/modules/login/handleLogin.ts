import { LoginSubmittedData } from "@/components/interfaces/Interfaces";
import { auth, db } from "@/firebase";
import { toast } from "@/hooks/use-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

export const handleLogin = async (
  data: LoginSubmittedData,
  onSuccess: () => void
) => {
  try {
    

    const q = await getDocs(query(
      collection(db, "users"),
      where("email", "==", data.email)
    ));

    if (q.empty) {
      toast({
        title: "Email not found in database",
        variant: "destructive",
      });
      return; 
    }

    await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    toast({
      title: "Logged in Successfully",
      variant: "success",
    });

    onSuccess();
  } catch  {
    toast({
      title: "Invalid Credentials",
      variant: "destructive",
    });
  }
};
