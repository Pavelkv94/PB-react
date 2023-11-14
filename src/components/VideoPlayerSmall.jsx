import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/VideoPlayerSmall.module.scss";

const VideoPlayerSmall = ({ service, withPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [playerWidth, setPlayerWidth] = useState(0);
  const [playerHeight, setPlayerHeight] = useState(0);

  const updatePlayerDimensions = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight - 100;

    const aspectRatio = 16 / 9; // 16:9

    let newWidth = windowWidth;
    let newHeight = windowWidth / aspectRatio;

    if (newHeight > windowHeight) {
      newHeight = windowHeight;
      newWidth = windowHeight * aspectRatio;
    }

    setPlayerWidth(newWidth);
    setPlayerHeight(newHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updatePlayerDimensions);

    updatePlayerDimensions();

    return () => {
      window.removeEventListener("resize", updatePlayerDimensions);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.src = service.videoUrl;
      }
    }
  }, [isPlaying, service.videoUrl]);

  const playVideo = () => {
    withPlay()
    setIsPlaying(true);
  };
  return (
    <div className={styles.videoWrapper}>
      <div className={`${styles.screen} ${styles[`screen${service.id}`]}`}>
        <div className={styles.playBtn} onClick={playVideo}>
          <div className={styles.triangle}></div>
        </div>
      </div>

      {isPlaying && (
        <div
          className={styles.videoWrapperBack}
          onClick={() => {
            setIsPlaying(false);
          }}
        >
          <iframe
            ref={videoRef}
            width={playerWidth}
            height={playerHeight}
            frameBorder={0}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerSmall;
