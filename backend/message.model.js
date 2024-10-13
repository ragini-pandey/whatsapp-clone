import mongoose from "mongoose";


const messageSchema = new mongoose.Schema(
    {
        name: String,
        message: String,
        timestamp: String,
        received: Boolean
    },
    {
        collection: "message",
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

export const messageModel = mongoose.model('messageModel', messageSchema);
