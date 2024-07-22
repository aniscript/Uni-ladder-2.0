"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} />
        </Link>
        <Image
          src="/hamburger-menu.svg"
          alt="Hamburger menu"
          width={30}
          height={30}
          className="block md:hidden"
        />
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10 sm:gap-x-4 ">
          <li className="body-text text-primary !font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="body-text text-grey-200 !font-normal">
            <Link href="/about">About</Link>
          </li>
          <li className="body-text text-grey-200 !font-normal">
            <Link href="/uk-study">UK Study</Link>
          </li>
          <li className="body-text text-grey-200 !font-normal">
            <Link href="/contact">Branches</Link>
          </li>
          <li className="">
            <Button title="Book an appointment" handleClick={() => {}} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
