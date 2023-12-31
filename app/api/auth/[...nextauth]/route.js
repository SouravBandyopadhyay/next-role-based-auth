import NextAuth from "next-auth/next";
import { options } from "./options.js";

const handler = NextAuth(options);
export { handler as GET, handler as POST };
