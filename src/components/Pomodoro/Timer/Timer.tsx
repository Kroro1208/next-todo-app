'use client';
import React, { useEffect, useMemo, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Pause, Play } from 'lucide-react';
import { useStopwatch } from 'react-timer-hook';
import useLocalStorageState from 'use-local-storage-state';
import ProgressBar from "@ramonak/react-progress-bar";

const Timer = () => {
  const [mode, setMode ] = useLocalStorageState<'working' | 'break'>('mode', {
    defaultValue: 'working'
  });
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch();

  const resetWrapper = React.useCallback(() => {
    reset(undefined, false);
  }, [reset]);

  const alarmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if(minutes >= 1 && mode == 'working'){
      console.log(mode);
      alert('休憩時間です！');
      if (alarmRef.current) {
        alarmRef.current.play();
      }
      setMode('break');
      resetWrapper();
    }
    if(minutes >= 1 && mode == 'break'){
      alert('作業開始しましょう！')
       if (alarmRef.current) {
        alarmRef.current.play();
      }
      setMode('working');
      resetWrapper();
    }
  }, [minutes, mode, setMode, resetWrapper]);

const getFormatedTime = (time: number) => {
  return time < 10 ? `0${time}` : time;
}

const progressPercentage = useMemo(() => {
  if (mode === 'working') {
    return (minutes * 60 + seconds) / (1 * 60) * 100;
  } else {
    return (minutes * 60 + seconds) / (1 * 60) * 100;
  }
}, [minutes, seconds, mode]);

  return (
    <div className='bg-red-300 p-2 mb-2 border h-12 flex items-center justify-between'>
      <audio ref={alarmRef} src="/alarm.mp3" preload="auto" />
      <div className='flex items-center gap-1'>
         { isRunning ? 
         <Button size="icon" variant="ghost" onClick={() => {
          pause();
        }}
        className="bg-gray-100 text-primary-foreground hover:bg-sky400/90 border-gray-400 border-b-4 active:border-b-0"
        >
            <Pause size={18} color='black'/>
        </Button> :
          <Button size="icon" variant="ghost" onClick={() => {
            start();
          }}
          className="bg-gray-100 text-primary-foreground hover:bg-sky400/90 border-gray-400 border-b-4 active:border-b-0"
          >
              <Play size={18} color='black'/>
          </Button>
          }
          <time className='text-sm text-muted-foreground tabular-nums mr-2'>
            {getFormatedTime(minutes)}:{getFormatedTime(seconds)}
          </time>
      </div>
      <div className='flex-1'>
        <ProgressBar
          completed={progressPercentage}
          bgColor="#4caf50"
          height="20px"
          width="100%"
          isLabelVisible={false}
        />
      </div>    
</div>
  )
}

export default Timer
