'use client';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import ToolBar from '../ToolBar/ToolBar';

const Player = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="player-wrapper flex flex-col gap-2">
          <div className='flex-1'>
          {isClient ? (
              <ReactPlayer
              url='https://www.youtube.com/watch?v=2iIIzVfNlRk'
              className='react-player'
              width='100%'
              height='100%'
              />
          ) : (
              <div className='h-80 flex justify-center items-center' aria-label='読み込み中'>
                  <div className='animate-spin h-5 w-5 border-4 border-green-500 rounded-full border-t-transparent'>
                  </div>
              </div>
          )}
          </div>
      </div>
      <ToolBar />
    </>
  );
}

export default Player;
