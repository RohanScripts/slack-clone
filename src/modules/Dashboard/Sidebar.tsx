import {
  AtSign,
  Building,
  ChevronDown,
  EllipsisVertical,
  Layers,
  MessageCircleMore,
  NotebookPen,
  SendHorizonal,
  StickyNote,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen bg-[#3A123E]">
      <div className="flex items-center px-4">
        <div className="w-full h-12 flex items-center cursor-pointer">
          <p className="text-white">Webelight Solutions</p>
          <ChevronDown color="white" />
        </div>
        <div className="w-7 h-7 bg-white flex justify-center items-center rounded-xl p-1 cursor-pointer">
          <NotebookPen strokeWidth={1.5} />
        </div>
      </div>
      {/* menu */}
      <div className="px-2 py-3 flex flex-col">
        <div className="flex items-center justify-between w-full p-2 cursor-pointer">
          <div className="flex items-center gap-2 ">
            <MessageCircleMore className="text-white/80" />
            <p className="text-white/80">Threads</p>
          </div>
          <div className="bg-white text-black w-7 h-5 rounded-xl flex justify-center items-center">
            1
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer">
          <div className="flex items-center gap-2 ">
            <AtSign className="text-white/80" />
            <p className="text-white/80">Mentions & reactions</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer">
          <div className="flex items-center gap-2 ">
            <SendHorizonal className="text-white/80" />
            <p className="text-white/80">Drafts & sent</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer">
          <div className="flex items-center gap-2 ">
            <StickyNote className="text-white/80" />
            <p className="text-white/80">Canvases</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer">
          <div className="flex items-center gap-2 ">
            <Building className="text-white/80" />
            <p className="text-white/80">Slack connect</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer">
          <div className="flex items-center gap-2 ">
            <Layers className="text-white/80" />
            <p className="text-white/80">Files</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-2 cursor-pointer">
          <div className="flex items-center gap-2 ">
            <EllipsisVertical className="text-white/80" />
            <p className="text-white/80">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};
