import TaskCard from "@/components/TaskCard/ TaskCard"
import { TaskDocument } from "@/models/task";

const getExpireedTask = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: 'no-store'
  });
  
  if(response.status !== 200) {
    throw new Error();
  }
  const data = await response.json();
  return data.tasks as TaskDocument[];
  }

const ExpiredTaskPage = async () => {
  const expiredTask = await getExpireedTask();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">期限切れのタスク</h1>
        
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        { expiredTask.length > 0 ? (
          expiredTask.map((task) => (
            <TaskCard key={task._id} task={task}/>
          ))) : (
            <h1 className="text-xl font-semibold text-gray-500">現在、期限切れタスクはありません</h1>
          )
        }
      </div>
    </div>
  )
}

export default ExpiredTaskPage
