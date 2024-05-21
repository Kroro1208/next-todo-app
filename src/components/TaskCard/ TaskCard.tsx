import EditButton from "./ EditButton/EditButton"
import DeleteButton from "./DeleteButton/DeleteButton"

const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-lg shadow-lg flex flex-col justify-between">
      <header>
        <h1 className="font-semibold text-lg">タイトル</h1>
        <div className="mt-1 text-sm line-clamp-3">タスクの詳細</div>
      </header>
      <div>
        <div className="text-sm">2024-12-31</div>
        <div className="flex justify-between items-center">
            <div className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm
            ${true ? 'bg-green-500' : 'bg-red-400'}
            `}>{true ? '完了' : '未完了'}</div>
            <div className="flex gap-4">
                <EditButton id='1'/>
                <DeleteButton id='1'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
