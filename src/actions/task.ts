'use server';

import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
    error: string;
}

//task作成のための関数
export const createTask = async(state: FormState, formData: FormData) => {
    const newTask: Task = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        dueDate: formData.get('dueDate') as string,
        isComppleted: false
    };

    //作成されたらDBに登録する
    try {
        await connectDB()
        await TaskModel.create(newTask);
    } catch (error) {
        state.error = 'タスクの作成に失敗しました'
        return state;
    }
    // タスクが作成されたらリダイレクト
    redirect('/');
}