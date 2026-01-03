import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(products);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, description, price, images, details, stock, status, pdf } = body;

        const product = await prisma.product.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                images: images || [],
                details: details || [],
                stock: parseInt(stock || "0"),
                status: status || "Draft",
                pdf: pdf || null
            }
        });
        return NextResponse.json(product, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
