import { SignupSubmittedData } from "@/components/interfaces/Interfaces";
import { auth, db } from "@/firebase";
import { toast } from "@/hooks/use-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const handleSignup = (
  data: SignupSubmittedData,
  onSuccess: () => void
) => {
  if (data.password === data.confirmPassword) {
    return createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        updateProfile(user, {
          displayName: `${data.firstName} ${data.lastName}`,
        });

        setDoc(doc(db, "users", user.uid), {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        });
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Email already in use",
          variant: "destructive",
          duration: 3000,
        });
      });
  } else {
    console.log(data.password, data.confirmPassword);
    toast({
      title: "Password Doesn't Matched !",
      variant: "destructive",
    });
  }
};
