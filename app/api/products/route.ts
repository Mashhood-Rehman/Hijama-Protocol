import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "@/models/Product";

async function connectDB() {
    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(process.env.MONGODB_URI!);
}

export async function GET() {
    try {
        await connectDB();
        const products = await Product.find().sort({ createdAt: -1 });
        return NextResponse.json(products);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const product = await Product.create(body);
        return NextResponse.json(product, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
