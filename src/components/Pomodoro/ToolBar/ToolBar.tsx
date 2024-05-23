import React from 'react'
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button"

const ToolBar = () => {
  return (
    <div className='bg-red-300 p-2 mb-2 border h-10 flex items-center rounded-full'>
        <div className='flex items-center'>
            <Button size="icon" variant="ghost">
                <Play size={20} color='black'/>
            </Button>
        </div>
    </div>
  )
}

export default ToolBar
