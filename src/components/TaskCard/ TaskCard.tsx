
const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-lg shadow-lg flex flex-col justify-between
    hover:bg-slate-200 transform hover:scale-105 transition-all duration-300
    ">
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
                <div>編集</div>
                <div>削除</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
