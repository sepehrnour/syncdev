"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { House } from "lucide-react";
import Link from "next/link";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} className="pr-2">
          <House size={"25px"} strokeWidth={"1.5px"} />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Development">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Team</HoveredLink>
            <HoveredLink href="/services">Services</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <h1> Contact</h1>
        </Link>
      </Menu>
    </div>
  );
}
