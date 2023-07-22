import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 gap-3">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <Link href="/dashboard" className="flex items-center md:hidden">
        <div className="relative w-8 h-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className="text-2xl font-bold">AIssential Tools</h1>
      </Link>
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
export default Navbar;