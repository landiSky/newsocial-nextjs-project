import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div>
        <Link href="/" className="font-bold text-xl text-blue-500">
          LandiSocial
        </Link>
      </div>
      {/* center */}
      {/* 最小宽度为768px时显示 */}
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <MobileMenu />
      </div>
    </div>
  );
}
