import {NextResponse} from "next/server";
// export const dynamic = "force-static";
export const revalidate = 5;
export async function GET() {
    console.log("It fethced")

    return NextResponse.json({title: "this is articles"})
}