import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <NavigationMenu className="flex gap-3 p-1 md:p-6 mx-auto justify-center fixed top-0 right-0 left-0 font-medium text-white ">
      <NavigationMenuLink
        className="hover:bg-stone-300 hover:text-stone-700 transition duration-300 text-xs md:text-xl"
        href="/"
      >
        Home
      </NavigationMenuLink>
      <NavigationMenuLink
        className="hover:bg-stone-300 hover:text-stone-700  transition duration-300 text-xs md:text-xl"
        href="/despre"
      >
        Despre noi
      </NavigationMenuLink>
      <NavigationMenuLink
        className="hover:bg-stone-300 hover:text-stone-700  transition duration-300 text-xs md:text-xl"
        href="/abonamente"
      >
        Abonamente
      </NavigationMenuLink>
      <NavigationMenuLink
        className="hover:bg-stone-300 hover:text-stone-700  transition duration-300 text-xs md:text-xl"
        href="/contact"
      >
        Contact
      </NavigationMenuLink>
    </NavigationMenu>
  );
}
