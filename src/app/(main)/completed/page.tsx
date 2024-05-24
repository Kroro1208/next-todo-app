import TaskCard from "@/components/TaskCard/TaskCard"
import { TaskDocument } from "@/models/task"

const getCompletedTasks = async (): Promise<TaskDocument[]>=> {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: 'no-store'
  });
  if(response.status !== 200) {
    throw new Error();
  }
  const data = await response.json();
  return data.tasks as TaskDocument[];
}
const CompletedTaskPage = async () => {
  const completedTask = await getCompletedTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">完了済みのタスク</h1>
        
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {completedTask.length > 0 ? (
          completedTask.map((task) => (
            <TaskCard key={task._id} task={task}/>
          ))
        ) : (
          <h1 className="text-xl font-semibold text-gray-500">現在、完了済みタスクはありません</h1>
        ) }
      </div>
    </div>
  )
}

export default CompletedTaskPage
