import { NextResponse } from "next/server"

export default function middleware(request) {
  //Verifikasi TOKEN
  //ada atau tidak
  const cookie = request.cookies.get("token")?.value;
  if (cookie) {
    return NextResponse.next();
    
  }
  return NextResponse.redirect(new URL("/login",request.url));
}

export const config = {
  matcher:["/dashboard"],
}
