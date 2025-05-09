import {
  CircleHelp,
  Clock,
  Menu,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import dp from "@/assets/dp.png";
import { useContext } from "react";
import { ChannelContext } from "@/context/channelContext";

export const DashTop = () => {
  const channelContext = useContext(ChannelContext);
  const toggleMobileMenu = () => {
    channelContext?.setIsMobileMenu(!channelContext.isMobileMenu);
  };
  return (
    <div className="w-full h-12 bg-DashTopBg flex justify-between">
      <button
        onClick={toggleMobileMenu}
        className="md:hidden ml-5 text-white rounded-md"
      >
        {channelContext?.isMobileMenu ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className="w-1/5 h-full md:flex justify-end items-center gap-5 p-4 hidden ">
        <Clock color="white" className="cursor-pointer hidden md:block" />
      </div>
      <div className="w-3/5 h-full p-2">
        <div className="bg-white/20 rounded-lg w-full h-full flex items-center justify-between p-3 cursor-pointer">
          <Search color="white" />
          <p className="text-white">Search</p>
          <SlidersHorizontal color="white" />
        </div>
      </div>
      <div className="w-1/5 h-full flex items-center justify-end gap-5 p-2">
        <CircleHelp color="white" />
        <div className="relative w-8 h-7">
          <img src={dp} />
          <div className="w-2 h-2 bg-green-500 rounded-full absolute z-10 bottom-1 left-5"></div>
        </div>
      </div>
    </div>
  );
};
