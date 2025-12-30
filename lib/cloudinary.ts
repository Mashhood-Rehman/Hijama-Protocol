import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (
    fileBuffer: Buffer,
    folder: string,
    resourceType: 'image' | 'raw' | 'auto' = 'auto'
): Promise<string> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                { folder, resource_type: resourceType },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        return reject(error);
                    }
                    resolve(result!.secure_url);
                }
            )
            .end(fileBuffer);
    });
};

export default cloudinary;
