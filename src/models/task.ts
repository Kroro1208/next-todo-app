import mongoose, { Document } from "mongoose";

export interface Task {
    title: string;
    description: string;
    dueDate: string;
    isComppleted: boolean;
}

export interface TaskDocument extends Task, Document {
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new mongoose.Schema<TaskDocument>({
    title: {
        type: String,
        required: true,
    },
    desciption: { 
        type: String,
    },
    dueDate: {
        type: String,
        required: true,
    },
    isComppleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

// すでにモデルが作成されている場合は左辺でモデルを取得して、作成されていない場合がschemaからモデルを作成する
export const TaskModel = mongoose.models.Task || mongoose.model('Task', taskSchema);