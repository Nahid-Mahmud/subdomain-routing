import { NextRequest, NextResponse } from "next/server";
// NEXT_PUBLIC_ROOT_DOMAIN=example.com
// NEXT_PUBLIC_BLOG_DOMAIN=blog.example.com
// NEXT_PUBLIC_FORUM_DOMAIN=forum.example.com
export const config = {
  matcher: ["/((?!api/|_next/|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host")?.replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // Routing logic
  const path = url.pathname;

  // Route requests based on the subdomain
  if (hostname === process.env.NEXT_PUBLIC_BLOG_DOMAIN) {
    return NextResponse.rewrite(new URL(`/blog${path}`, req.url));
  }

  if (hostname === process.env.NEXT_PUBLIC_FORUM_DOMAIN) {
    return NextResponse.rewrite(new URL(`/forum${path}`, req.url));
  }

  // Default root domain routing
  return NextResponse.rewrite(new URL(`/`, req.url));
}
