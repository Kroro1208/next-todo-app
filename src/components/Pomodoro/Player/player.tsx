'use client';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="player-wrapper">
      {isClient ? (
        <ReactPlayer
          url='https://www.youtube.com/watch?v=2iIIzVfNlRk'
          className='react-player'
          width='100%'
          height='100%'
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Player;
