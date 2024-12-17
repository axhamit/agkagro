'use client';
import React, { useRef } from 'react'
import styles from './videoplayer.module.css'

const VideoPlayer = ({playState, setPlayState}) => {
      const player = useRef(null);

      const closePlayer = (e) => {
        if (e.target === player.current) {
          setPlayState(false);
        }
      };
  return (

        <div className={`${styles.videoPlayer} ${playState ? '' : styles.hide}`} 
          ref={player} onClick={closePlayer}>
          <video
           src=""
           autoPlay
           muted
           controls
           loop
          />
        </div>
    
  )
}

export default VideoPlayer
