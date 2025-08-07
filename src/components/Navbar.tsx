import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div>
        <Link href="/" className="font-bold text-xl">
          LandiSocial
        </Link>
      </div>
      {/* center */}
      <div className="hidden"></div>
      {/* right */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
}
