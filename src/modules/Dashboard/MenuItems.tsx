import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  count?: number;
  onclick?: () => void;
  selected?: boolean;
  isOnline?: boolean; // ✅ NEW: online status prop
}

export const MenuItems = ({
  icon,
  label,
  count,
  onclick,
  selected,
  isOnline,
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
        <p className="text-white/80 text-sm relative">
          {label}
          {isOnline && (
            <span className="absolute -top-1 -right-3 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          )}
        </p>
      </div>
      {count !== undefined && (
        <div className="bg-white text-black w-7 h-5 rounded-xl flex justify-center items-center text-xs">
          {count}
        </div>
      )}
    </div>
  );
};
