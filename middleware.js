import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(request) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);
    if (
      request.nextUrl.pathname.startsWith("/CreateUser") &&
      request.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", request.url));
    }
  },
  {
    callbacks: {
      // Token is not null
        authorized: ({ token }) => !!token,
    //   authorized: ({ token }) => token?.role === "admin",
    },
  }
);

export const config = { matcher: ["/CreateUser"] };
