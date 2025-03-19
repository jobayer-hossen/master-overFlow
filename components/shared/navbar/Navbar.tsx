import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
import logo from "@/public/assets/images/logo-layer.svg"

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 z-50 w-full gap-5 p-3 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={logo}
          width={30}
          height={30}
          alt="OverFlow"
        />

        <p className="h2-bold text-lg md:text-3xl font-spaceGrotesk text-dark-100 dark:text-light-900 ">
          Over <span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
