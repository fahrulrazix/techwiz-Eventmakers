import { Inter } from "next/font/google";
import "@style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Makers",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
