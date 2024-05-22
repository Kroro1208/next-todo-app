'use server';

import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
    error: string;
}

//task作成のための関数
export const createTask = async (state: FormState, formData: FormData) => {
    const newTask: Task = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        dueDate: formData.get('dueDate') as string,
        isCompleted: false
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

export const updateTask = async (id: string, state: FormState, formData: FormData) => {
    const updateTask: Task = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        dueDate: formData.get('dueDate') as string,
        isCompleted: Boolean(formData.get('isCompleted'))
    };

    //編集タスクを更新
    try {
        await connectDB()
        await TaskModel.updateOne({ _id: id }, updateTask);
    } catch (error) {
        state.error = 'タスクの更新に失敗しました'
        return state;
    }
    // タスクが更新されたらリダイレクト
    redirect('/');
}