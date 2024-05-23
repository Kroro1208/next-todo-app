import React from 'react'
import { Button } from "@/components/ui/button"
import { Pause, Play } from 'lucide-react';
import { useStopwatch } from 'react-timer-hook';


const Timer = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch();
  return (
    <div className='bg-red-300 p-2 mb-2 border h-10 flex items-center justify-between'>
    <div className='flex items-center'>
        <Button size="icon" variant="ghost" onClick={() => {
          start();
        }}>
            <Play size={18} color='black'/>
        </Button>
        <Button size="icon" variant="ghost" onClick={() => {
          pause();
        }}>
            <Pause size={18} color='black'/>
        </Button>
        <time className='text-sm mr-2'>{totalSeconds}</time>
    </div>
    <div className='overflow-hidden h-5 w-72 rounded-full'>
        <div className='size-full bg-muted'></div>
    </div>
</div>
  )
}

export default Timer
