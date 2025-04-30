import { DashTop } from "@/modules/Dashboard/DashTop";
import { Sidebar } from "@/modules/Dashboard/Sidebar";
import { ReactNode } from "react";

export const DashLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full">
        <DashTop />
      </div>
      <div className="w-full  flex">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
