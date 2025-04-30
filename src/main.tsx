import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "./components/ui/toaster.tsx";
import { ChannelProvider } from "./context/channelContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChannelProvider>
        <App />
      </ChannelProvider>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
