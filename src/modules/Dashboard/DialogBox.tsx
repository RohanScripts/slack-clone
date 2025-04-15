import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";

interface CustomDialogProps {
  trigger: ReactNode;
  title: string;
  placeholder?: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

export const DialogBox = ({
  trigger,
  title,
  placeholder,
  onInputChange,
  onSubmit,
  loading,
}: CustomDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    onSubmit();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-white text-black space-y-4">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Input
          placeholder={placeholder}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <Button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-800 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          onClick={handleSubmit}
        >
          {loading ? <Loader /> : "Submit"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
