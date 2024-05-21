import TaskCard from "@/components/TaskCard/ TaskCard";
import Link from "next/link";
import { MdOutlineLibraryAdd } from "react-icons/md";

export default function MainPage() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">全てのタスク</h1>
        <Link href='/new'
        className="flex items-center gap-2 font-semibold border px-4 py-2
        rounded-full shadow-lg text-white bg-gray-800 hover:bg-gray-700
        transform hover:scale-105 transition-transform duration-300
        shadow-gray-700 hover:shadow-gray-600">
          <MdOutlineLibraryAdd className="size-5"/>
          <div>タスクを追加する</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
}
