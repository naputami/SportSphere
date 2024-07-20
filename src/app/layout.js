import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title:
    "Sport Sphere",
  description:
    "Sport Sphere By Elysium",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
