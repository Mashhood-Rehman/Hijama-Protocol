import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const blog = await (prisma as any).blog.findUnique({
            where: { id }
        });
        if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        return NextResponse.json(blog);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { title, content, excerpt, images, category, status, slug } = body;

        const updateData: any = {};
        if (title !== undefined) updateData.title = title;
        if (content !== undefined) updateData.content = content;
        if (excerpt !== undefined) updateData.excerpt = excerpt;
        if (images !== undefined) updateData.images = images;
        if (category !== undefined) updateData.category = category;
        if (status !== undefined) updateData.status = status;
        if (slug !== undefined) updateData.slug = slug;

        const blog = await (prisma as any).blog.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json(blog);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await (prisma as any).blog.delete({
            where: { id }
        });
        return NextResponse.json({ message: "Blog deleted successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
