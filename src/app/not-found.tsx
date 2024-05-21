import Link from "next/link"
import { IoHomeSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-4xl font-medium">ページが見つかりません</p>
        <Link href={'/'} className="mt-4 text-xl text-blue-600 hover:underline flex gap-2">
            <IoHomeSharp size={24}/>
            ホームに戻る
        </Link>
    </div>
  )
}

export default NotFound
