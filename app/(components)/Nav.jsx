import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { ModeToggle } from "@/components/toggle-switch-theme";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/CreateUser", text: "Create User" },
  { href: "/ClientMember", text: "Client Member" },
  { href: "/Member", text: "Member" },
  { href: "/Public", text: "Public" },
];

// NOTE getServerSession it is applicable in server side only means this navbar is server component

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <header className="">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <h3 className="leading-7 [&:not(:first-child)]:mt-6">NextAuth</h3>
        <div className="flex gap-10">
          {navItems.map(({ href, text }) => (
            <Link
              key={text}
              href={href}
              className={buttonVariants({ variant: "link" })}
            >
              {text}
            </Link>
          ))}
          {session ? (
            <Link
              href="/api/auth/signout?callbackUrl=/"
              key="Logout"
              className={buttonVariants({ variant: "link" })}
            >
              Logout
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              key="Login"
              className={buttonVariants({ variant: "link" })}
            >
              Login
            </Link>
          )}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
