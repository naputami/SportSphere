import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { CommunityContextProvider } from "@/context/community-context";
import { ShareLinkModal } from "@/components/share-link-modal";

export const metadata = {
  title: "Sport Sphere",
  description: "Sport Sphere By Elysium",
  icons: {
    icon: "/sport-sphere-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Toaster />
        <CommunityContextProvider>
          <ShareLinkModal />
          {children}
        </CommunityContextProvider>
      </body>
    </html>
  );
}
