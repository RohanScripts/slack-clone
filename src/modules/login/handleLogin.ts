import { LoginSubmittedData } from "@/components/interfaces/Interfaces";
import { auth } from "@/firebase";
import { toast } from "@/hooks/use-toast";
import { signInWithEmailAndPassword } from "firebase/auth";

export const handleLogin = (
  data: LoginSubmittedData,
  onSuccess: () => void
) => {
  return signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      toast({
        title: "Logged in Successfully",
        variant: "success",
      });
      onSuccess();
    })
    .catch(() => {
      toast({
        title: "Invalid Credentials",
        variant: "destructive",
        duration: 3000,
      });
    });
};
