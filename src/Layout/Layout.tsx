import slackLogo from "@/assets/slack_logo.png";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:w-1/2 bg-purple-700 lg:flex justify-center items-center p-5">
        <img src={slackLogo} alt="" className="max-w-lg" />
      </div>
      <div className="w-full lg:w-1/2 px-6 py-12 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
