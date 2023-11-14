import React, { useState } from "react";
import styles from "../styles/VideoMaking.module.scss";
import PlaySvg from "../svgs/play.svg";
import PlaySvgmd from "../svgs/play-md.svg";
import PlayLight from "../pngs/playLight.webp";

import Title from "./Title";

const VideoMaking = ({ isDarkTheme, screenSize }) => {

  const playBtn = screenSize > 1560 ? <img src={PlaySvg} /> : <img src={PlaySvgmd} />;
  return (
    <div className={`${styles.videoMakingWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="onas">
      <div className={styles.videoMakingContent}>
        <div className={styles.videoMakingTitleBlockWrap}>
          <div className={`${styles.videoMakingTitleBlock} ${isDarkTheme ? styles.dark : styles.light}`}>
            <Title isDarkTheme={isDarkTheme} text="ВИДЕОСЪЁМКА" screenSize={screenSize}/>
            <div className={`${styles.divider} ${isDarkTheme ? styles.dark : styles.light}`}></div>
            <Title isDarkTheme={isDarkTheme} text="АНИМАЦИЯ" right screenSize={screenSize}/>
          </div>
        </div>

        <div className={`${styles.videoEllipse} ${isDarkTheme ? styles.dark : styles.light}`}></div>
        <div className={`${styles.digits} ${isDarkTheme ? styles.dark : styles.light}`}>
          <div className={`${styles.circle} ${isDarkTheme ? styles.dark : styles.light}`}>
              <div className={styles.circleText}>
                <p>10+</p>
                <p>ЛЕТ ОПЫТА</p>
              </div>
          </div>
          <div className={`${styles.circle} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.circleText}>
              <p>560+</p>
              <p>ПРОЕКТОВ</p>
            </div>
            </div>
            <div className={`${styles.circle} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.circleText}>
              <p>30+</p>
              <p>СПЕЦИАЛИСТОВ</p>
            </div>
            </div>
        </div>

        <div className={`${styles.playBlock} ${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={`${styles.playButton} ${isDarkTheme ? styles.dark : styles.light}`}>
          { isDarkTheme ? playBtn : <img src={PlayLight} width={screenSize > 1560 ? 310 : 190} height={screenSize > 1560 ? 295 : 180}/> }
        </div>
        <div className={`${styles.centerElem} ${isDarkTheme ? styles.dark : styles.light}`}></div>
        <div className={`${styles.partFullEl} ${isDarkTheme ? styles.dark : styles.light} ${styles.first}`}></div>
        <div className={`${styles.partFullEl} ${isDarkTheme ? styles.dark : styles.light} ${styles.second}`}></div>
        <div className={`${styles.partEl} ${isDarkTheme ? styles.dark : styles.light} ${styles.first}`}></div>
        <div className={`${styles.partEl} ${isDarkTheme ? styles.dark : styles.light} ${styles.second}`}></div>

        <p className={`${styles.playDescript} ${isDarkTheme ? styles.dark : styles.light} ${styles.one}`}>Видео на основе 2D анимации</p>
        <p className={`${styles.playDescript} ${isDarkTheme ? styles.dark : styles.light} ${styles.two}`}>Видео на основе 3D анимации</p>
        <p className={`${styles.playDescript} ${isDarkTheme ? styles.dark : styles.light} ${styles.three}`}>Рекламные <br />видео</p>
        <p className={`${styles.playDescript} ${isDarkTheme ? styles.dark : styles.light} ${styles.four}`}>Презентационные <br />видео</p>
        </div>
       
      </div>
    </div>
  );
};

export default VideoMaking;
