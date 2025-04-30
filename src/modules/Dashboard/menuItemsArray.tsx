import {
  AtSign,
  Building,
  EllipsisVertical,
  Layers,
  MessageCircleMore,
  SendHorizonal,
  StickyNote,
} from "lucide-react";

export const menuItemsArray = [
  {
    icon: <MessageCircleMore className="text-white/80" />,
    label: "Threads",
    count: 1,
  },
  {
    icon: <AtSign className="text-white/80" />,
    label: "Mentions & reactions",
  },
  {
    icon: <SendHorizonal className="text-white/80" />,
    label: "Drafts & sent",
  },
  {
    icon: <StickyNote className="text-white/80" />,
    label: "Canvases",
  },
  {
    icon: <Building className="text-white/80" />,
    label: "Slack connect",
  },
  {
    icon: <Layers className="text-white/80" />,
    label: "Files",
  },
  {
    icon: <EllipsisVertical className="text-white/80" />,
    label: "More",
  },
];
