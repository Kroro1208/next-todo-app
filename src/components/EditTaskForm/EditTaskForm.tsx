'use client';

import { TaskDocument } from "@/models/task"
import { useState } from "react";
interface EditTaskProps {
  task: TaskDocument;
}

const EditTaskForm = ({ task }: EditTaskProps) => {
  console.log(task);
  const [title, setTitle ] = useState(task.title);
  const [description, setDescription ] = useState(task.description);
  const [dueDate, setDueDate ] = useState(task.dueDate);
  const [isCompleted, setIsCompleted ] = useState(task.isCompleted);

    return (
        <div className="mt-10 mx-auto w-full max-w-sm">
          <form action="">
            <div>
                <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
                <input type="text" id="title" name="title" required
                value={title} onChange={(e) => setTitle(e.target.value)}
                className="block mt2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm
                ring-1 ring-inset ring-gray-300"/>
            </div>
            <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium">詳細</label>
                <input type="text" id="descriptionle" name="description" required
                value={description} onChange={(e) => setDescription(e.target.value)}
                className="block mt2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm
                ring-1 ring-inset ring-gray-300"/>
            </div>
            <div className="mt-6">
                <label htmlFor="dueDate" className="block text-sm font-medium">期限</label>
                <input type="date" id="dueDatele" name="dueDate" required min="2024-05-20" max="2050-12-31"
                value={dueDate} onChange={(e) => setDueDate(e.target.value)}
                className="block mt2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm
                ring-1 ring-inset ring-gray-300"/>
            </div>
            <div className="mt6 flex items-center">
                <input type="checkbox" id="isCompleted" name="isCompleted"
                checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)}
                className="mr-2 w-4 h-4" />
                <label htmlFor="isCompleted" className="text-sm p-2">タスクを完了にする</label>
            </div>
            <button type="submit" className="mt-8 py-2 w-full rounded-md text-white bg-green-500 hover:bg-green-700 text-sm font-semibold shadow-sm">更新する</button>
          </form>
        </div>
      )
}

export default EditTaskForm