import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI || "");
    } catch (error) {
        console.error('DB接続に問題がありました');
        throw new Error();
    }
}