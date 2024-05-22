import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const completedTasks: Task[] = await TaskModel.find({
            isCompleted: true,
        });

        return NextResponse.json({
            message: '完了タスクの取得に成功しました',
            tasks: completedTasks
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: '完了タスクの取得に失敗しました',
            status: 500
        });
    }
}

export const dynamic = 'force-dynamic';