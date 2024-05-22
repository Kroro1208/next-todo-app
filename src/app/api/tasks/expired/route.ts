import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        // 現在の日付よりも期限日 (dueDate) が過去の日付であり、かつ未完了のタスク
        const currentDate = new Date().toISOString();
        const expiredTasks: Task[] = await TaskModel.find({
            isCompleted: false,
            dueDate: { $lt: currentDate } // $lt は MongoDB のクエリオペレーターで、「less than（より小さい）」
        });

        return NextResponse.json({
            message: '期限切れタスクの取得に成功しました',
            tasks: expiredTasks
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: '期限切れタスクの取得に失敗しました',
            status: 500
        });
    }
}

export const dynamic = 'force-dynamic';