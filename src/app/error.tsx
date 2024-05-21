"use client"
import Link from 'next/link';
import React from 'react'
import { BiSolidMessageRoundedError } from "react-icons/bi";

const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
            <h1 className="text-8xl font-bold">ERROR</h1>
            <p className="text-4xl font-medium">エラーが発生しました</p>
            <Link href={'/'} className="mt-4 text-xl text-blue-600 hover:underline flex gap-2">
                <BiSolidMessageRoundedError size={30}/>
                ホームに戻る
            </Link>
        </div>
      )
}

export default Error
