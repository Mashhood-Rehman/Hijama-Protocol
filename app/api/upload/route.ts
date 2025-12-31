import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const imageUrl = await uploadToCloudinary(buffer, "hijama_products");

        return NextResponse.json({ url: imageUrl });
    } catch (error: any) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: error.message || "Failed to upload image" }, { status: 500 });
    }
}
