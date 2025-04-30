import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  count?: number;
  onclick?: () => void;
  selected: boolean;
}

export const MenuItems = ({
  icon,
  label,
  count,
  onclick,
  selected,
}: MenuItemProps) => {
  return (
    <div
      onClick={onclick}
      className={cn(
        "flex items-center justify-between w-full p-2 cursor-pointer rounded-md",
        selected ? "bg-white/20" : "hover:bg-white/10"
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-white/80 text-sm">{label}</p>
      </div>
      {count !== undefined && (
        <div className="bg-white text-black w-7 h-5 rounded-xl flex justify-center items-center text-xs">
          {count}
        </div>
      )}
    </div>
  );
};
