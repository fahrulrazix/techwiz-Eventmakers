import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {

  //jika url / rewrite ke "/login"
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/login", request.nextUrl))
  }
  //Verifikasi TOKEN
  //ada atau tidak
  const token = request.cookies.get("token")?.value;//add ? to check if there is token or not
  if (token) {
    try {
      const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY);
      await jose.jwtVerify(token, secretKey);
      return NextResponse.next();
    } catch (error) {
      
      return NextResponse.redirect(new URL("/login",request.url))
      
    }
    
  }
  return NextResponse.redirect(new URL("/login",request.url));
}

export const config = {
  matcher:["/dashboard/:path*"],
}
