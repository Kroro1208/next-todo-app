import TaskCard from "@/components/TaskCard/ TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdOutlineLibraryAdd } from "react-icons/md";

const getAllTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks`, {
    cache: 'no-store'
  });

  if(response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
}
export default async function MainPage() {
  const allTasks = await getAllTasks();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">全てのタスク</h1>
        <Link href='/new'
        className="flex items-center gap-2 font-semibold border px-4 py-2
        rounded-full shadow-lg text-white bg-gray-500 hover:bg-indigo-500
        transform hover:scale-105 transition-transform duration-300
        shadow-gray-700 hover:shadow-gray-600">
          <MdOutlineLibraryAdd className="size-5"/>
          <div>タスクを追加する</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => (
          <TaskCard key={task._id} task={task}/>
        ))}
      </div>
    </div>
  );
}
