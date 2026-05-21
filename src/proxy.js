import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    // current path
    const currentPath = request.nextUrl.pathname;

    // login url
    const loginUrl = new URL("/login", request.url);

    // save redirect path
    loginUrl.searchParams.set("redirect", currentPath);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ideas/:path", "/my-ideas", "/my-interactions" ,"/profile"],
};
