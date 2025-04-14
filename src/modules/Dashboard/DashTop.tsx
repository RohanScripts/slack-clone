import {
  ArrowLeft,
  ArrowRight,
  CircleHelp,
  Clock,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import dp from "@/assets/dp.png";

export const DashTop = () => {
  return (
    <div className="w-full h-12 bg-DashTopBg flex">
      <div className="w-1/5 h-full flex justify-end items-center gap-5 p-4">
        <ArrowLeft color="white" className="cursor-pointer" />
        <ArrowRight color="white" className="cursor-pointer" />
        <Clock color="white" className="cursor-pointer" />
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
