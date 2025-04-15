import { ReactNode } from "react";

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  count?: number;
}

export const MenuItems = ({ icon, label, count }: MenuItemProps) => {
  return (
    <div className="flex items-center justify-between w-full p-2 cursor-pointer hover:bg-white/10 rounded-md">
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
