import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { ModeToggle } from "@/components/toggle-switch-theme";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>NextAuth</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
          <ModeToggle/>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href={"/api/auth/signin"}>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
