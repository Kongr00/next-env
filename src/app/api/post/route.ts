import prisma from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";


export async function GET(request: NextRequest){
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)

}