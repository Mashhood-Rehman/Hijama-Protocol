import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function GET() {
    await dbConnect();
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: products });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const price = formData.get('price') as string;
        const category = formData.get('category') as string;
        const imageFiles = formData.getAll('images') as File[];
        const pdfFile = formData.get('pdf') as File;

        if (!name || !price || !category) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const imageUrls: string[] = [];
        for (const file of imageFiles) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const url = await uploadToCloudinary(buffer, 'products/images', 'image');
            imageUrls.push(url);
        }

        let pdfUrl = '';
        if (pdfFile && pdfFile.size > 0) {
            const buffer = Buffer.from(await pdfFile.arrayBuffer());
            // PDF might need resource_type: 'raw' or 'auto'
            pdfUrl = await uploadToCloudinary(buffer, 'products/docs', 'auto');
        }

        const product = await Product.create({
            name,
            description,
            price: parseFloat(price),
            category,
            images: imageUrls,
            pdf: pdfUrl,
        });

        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error: any) {
        console.error('Error creating product:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
