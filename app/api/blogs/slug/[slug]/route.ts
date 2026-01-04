import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;
        const blog = await (prisma as any).blog.findUnique({
            where: { slug }
        });
        if (!blog) return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
        return NextResponse.json(blog);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
