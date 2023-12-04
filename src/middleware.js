import { NextResponse } from "next/server";
import * as jose from "jose";
import { SECRET_KEY } from "./config/apiUrl";

export default async function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
  const token = request.cookies.get("token")?.value; //add ? to check if there is token or not

  if (token) {
    //Verifikasi TOKEN
    try {
      const secretKey = new TextEncoder().encode(SECRET_KEY);
      await jose.jwtVerify(token, secretKey);

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
