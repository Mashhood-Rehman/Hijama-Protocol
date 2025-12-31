import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "@/models/Product";

async function connectDB() {
    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(process.env.MONGODB_URI!);
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const product = await Product.findById(params.id);
        if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
        return NextResponse.json(product);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const body = await req.json();
        const product = await Product.findByIdAndUpdate(params.id, body, { new: true });
        if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
        return NextResponse.json(product);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const product = await Product.findByIdAndDelete(params.id);
        if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
        return NextResponse.json({ message: "Product deleted successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
