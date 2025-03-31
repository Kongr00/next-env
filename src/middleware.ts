import {NextRequest, NextResponse} from "next/server";


export function middleware(request: NextRequest) {
    console.log("=========")

    const protectedPaths = ['/users']

    if (protectedPaths.includes(request.nextUrl.pathname)) {
        console.log("private");
        return NextResponse.redirect(new URL('/', request.url));
    }
    else
        console.log("public")


    // return NextResponse.rewrite(new URL("/", request.url))
}

export const config = {
    matcher: '/((?!_next/static|_next/image|.*\\\\..*|favicon.ico|sitemap.xml|robots.txt).*)'
}