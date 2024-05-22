import { TaskDocument } from "@/models/task"
import EditButton from "./ EditButton/EditButton"
import DeleteButton from "./DeleteButton/DeleteButton"

interface TaskCardProps {
  task: TaskDocument;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-lg shadow-lg flex flex-col justify-between">
      <header>
        <h1 className="font-semibold text-lg">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{task.description}</div>
      </header>
      <div>
        <div className="text-sm">{task.dueDate}</div>
        <div className="flex justify-between items-center">
            <div className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm
            ${task.isCompleted ? 'bg-green-500' : 'bg-red-400'}
            `}>{task.isCompleted ? '完了' : '未完了'}</div>
            <div className="flex gap-4">
                <EditButton id={task._id}/>
                <DeleteButton id={task.id}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
