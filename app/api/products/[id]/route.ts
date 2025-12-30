import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const product = await Product.findById(params.id);
        if (!product) {
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: product });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const formData = await request.formData();
        const updateData: any = {};

        const fields = ['name', 'description', 'price', 'category'];
        fields.forEach((field) => {
            const value = formData.get(field);
            if (value) {
                if (field === 'price') {
                    updateData[field] = parseFloat(value as string);
                } else {
                    updateData[field] = value;
                }
            }
        });

        const imageFiles = formData.getAll('images') as File[];
        if (imageFiles.length > 0 && imageFiles[0].size > 0) {
            const imageUrls: string[] = [];
            for (const file of imageFiles) {
                const buffer = Buffer.from(await file.arrayBuffer());
                const url = await uploadToCloudinary(buffer, 'products/images', 'image');
                imageUrls.push(url);
            }
            updateData.images = imageUrls;
        }

        const pdfFile = formData.get('pdf') as File;
        if (pdfFile && pdfFile.size > 0) {
            const buffer = Buffer.from(await pdfFile.arrayBuffer());
            const url = await uploadToCloudinary(buffer, 'products/docs', 'auto');
            updateData.pdf = url;
        }

        const product = await Product.findByIdAndUpdate(params.id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!product) {
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: product });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const deletedProduct = await Product.findByIdAndDelete(params.id);
        if (!deletedProduct) {
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
