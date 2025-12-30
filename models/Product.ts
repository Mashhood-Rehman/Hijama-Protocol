import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
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
        pdf: { type: String },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
