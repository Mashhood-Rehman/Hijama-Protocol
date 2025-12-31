import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    images: string[];
    category: string;
    price: number;
    stock: number;
    status: string;
    pdf?: string;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        images: { type: [String], default: [] },
        stock: { type: Number, default: 0 },
        status: { type: String, default: 'Draft' },
        pdf: { type: String },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
