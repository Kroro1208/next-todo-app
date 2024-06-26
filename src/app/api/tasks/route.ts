import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const allTasks: Task[] = await TaskModel.find();

        return NextResponse.json({
            message: 'タスクの取得に成功しました',
            tasks: allTasks
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'タスクの取得に失敗しました',
            status: 500
        });
    }
}

export const dynamic = 'force-dynamic';