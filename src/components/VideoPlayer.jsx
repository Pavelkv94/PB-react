import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/VideoPlayer.module.scss";

const VideoPlayer = ({ width, height, src, style, big, isDarkTheme, itemId, screenSize }) => {
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
        videoRef.current.src = src;
      }
    }
  }, [isPlaying, src]);


  const playVideo = () => {
    setIsPlaying(true);
  };
  return big ? (
    <div style={{ ...style, width, height }} className={`${styles.videoPlayer} ${styles.big} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.screen}>
        <div className={styles.pulse}></div>
        <div className={styles.playBtn} onClick={playVideo}>
          <div className={styles.triangle}></div>
        </div>
      </div>

      {isPlaying && (
        <div
          className={styles.videoWrapper}
          onClick={() => {
            setIsPlaying(false);
          }}
        >
          <iframe
            ref={videoRef}
            width={playerWidth}
            height={playerHeight}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  ) : (
    <div style={{ ...style, width, height }} className={`${styles.videoPlayer} ${styles.little} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={`${styles.screen} ${styles[`screenItem${itemId}`]}`}>
        <div className={styles.playBtn} onClick={playVideo}>
          <div className={styles.triangle}></div>
        </div>
      </div>
      {isPlaying && (
        <div
          className={styles.videoWrapper}
          onClick={() => {
            setIsPlaying(false);
          }}
        >
          <iframe
            ref={videoRef}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            width={playerWidth}
            height={playerHeight}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
