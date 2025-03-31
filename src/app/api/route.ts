import prisma from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";


export async function GET(request: NextRequest) {
    const posts = await prisma.post.findMany()

    const response = NextResponse.json(posts)
    response.cookies.set('I_love_next', 'false')

    return response
}


export async function POST(request: NextRequest){
    const res = await request.json()
    console.log(res)
    const post = await prisma.post.create({data: res});
    return NextResponse.json(post)
}