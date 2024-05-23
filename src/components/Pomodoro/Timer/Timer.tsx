import React from 'react'
import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react';

const Timer = () => {
  return (
    <div className='bg-red-300 p-2 mb-2 border h-10 flex items-center justify-between'>
    <div className='flex items-center'>
        <Button size="icon" variant="ghost">
            <Play size={20} color='black'/>
        </Button>
        <time className='text-sm mr-2'>25:00</time>
    </div>
    <div className='overflow-hidden h-5 w-72 rounded-full'>
        <div className='size-full bg-muted'></div>
    </div>
</div>
  )
}

export default Timer
