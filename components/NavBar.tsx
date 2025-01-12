import Image from "next/image";
import React from "react";
import Logo from "../img/logo.png";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ThemeToggler";

function NavBar() {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={50} />
      </Link>
      {/* <ModeToggle /> */}
      <div className="flex items-center">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            {" "}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-black">CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <Link href={"/auth"}>
              <DropdownMenuItem className="cursor-pointer">
                Logout
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavBar;
