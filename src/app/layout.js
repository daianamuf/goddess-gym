import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
        <NavigationMenu className="flex gap-3 p-6 mx-auto justify-center fixed top-0 right-0 left-0 font-medium text-white ">
          <NavigationMenuLink
            className="hover:bg-stone-300 hover:text-stone-700 transition duration-300 text-sm md:text-xl"
            href="/"
          >
            Home
          </NavigationMenuLink>
          <NavigationMenuLink
            className="hover:bg-stone-300 hover:text-stone-700  transition duration-300 text-sm md:text-xl"
            href="/despre"
          >
            Despre noi
          </NavigationMenuLink>
          <NavigationMenuLink
            className="hover:bg-stone-300 hover:text-stone-700  transition duration-300 text-sm md:text-xl"
            href="/abonamente"
          >
            Abonamente
          </NavigationMenuLink>
          <NavigationMenuLink
            className="hover:bg-stone-300 hover:text-stone-700  transition duration-300 text-sm md:text-xl"
            href="/contact"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenu>

        {children}
      </body>
    </html>
  );
}
