import React, { useState } from 'react';
import styles from './videosec.module.css';
import Image from 'next/image';
import video_icon from '../../public/assets/video-icon.png';

const Videosec = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <section className={styles.videoContainer}>
      {/* Video Top Section */}
      <div className={styles.videoTop}>
        <p className={styles.certificateTitle}>Certified from -</p>
        <div className={styles.certificateType}>
          <p>Apeda</p>
          <p>Spices board of India</p>
          <p>Nafed</p>
          <p>Halal</p>
        </div>
      </div>

      {/* Video Bottom Section */}
      <div className={styles.videoBottom}>
        <p className={styles.videoText}>
          Good Food matters to the Future of Development
        </p>
        <Image
          src={video_icon}
          alt="Play Video"
          className={styles.videoIcon}
          onClick={() => setPlayState(true)}
        />
      </div>

      {/* Video Popup */}
      {playState && (
        <div className={styles.videoPopup}>
          <div className={styles.videoOverlay} onClick={() => setPlayState(false)}></div>
          <div className={styles.videoContent}>
            <button className={styles.closeButton} onClick={() => setPlayState(false)}>×</button>
            <video controls autoPlay className={styles.videoPlayer}>
              <source src="/video/video-new.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videosec;
