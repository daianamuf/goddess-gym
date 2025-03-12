import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Goddess Gym | Fitness și Bodybuilding în Constanța",
  description:
    "Sala Goddess Gym din Constanța oferă echipamente moderne, antrenori dedicați și abonamente flexibile pentru orice nivel de fitness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />

        {children}
      </body>
    </html>
  );
}
