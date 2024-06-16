import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });

export const metadata = {
  title: "Money Manager",
  description: "Assginment 4 Devscale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-neutral-50 ${onest.className}`}>{children}</body>
    </html>
  );
}
