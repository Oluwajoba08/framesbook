// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/app/db";

// export async function POST(req: NextRequest){
//     const { author_id, content, images } = await req.json()

//     await prisma.posts.create({
//         data: {
//             content, author_id,
//         }
//     });

//     return NextResponse.json({ message: "Post uploaded" }, {status: 200});
// }
