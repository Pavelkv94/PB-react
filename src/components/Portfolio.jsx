import React, { useState } from "react";
import styles from "../styles/Portfolio.module.scss";
import Title from "./Title";
import VideoPlayer from "./VideoPlayer";
import Carousel from "./Carousel";
import { videos2d, videos3d, videosAdv, videosPortfolio, videosPresent, videosStory, videosViews } from "./contants";

const Portfolio = ({ isDarkTheme, tab, setTab, screenSize, tnx }) => {

  const tabs = [
    { title: "ПРЕЗЕНТАЦИОННЫЕ \n РОЛИКИ", key: 0 },
    { title: "2D \n АНИМАЦИЯ", key: 1 },
    { title: "3D \n АНИМАЦИЯ", key: 2 },
    { title: "РЕКЛАМНЫЕ \n РОЛИКИ", key: 3 },
    { title: "ВИДЕООБЗОРЫ \n ПРОДУКЦИИ", key: 4 },
    { title: "СТОРИТЕЛЛИНГ \n ВИДЕО", key: 5 },
  ];

  return (
    <div className={`${styles.portfolioWrapper} ${isDarkTheme ? styles.dark : styles.light} ${tnx ? styles.tnx : {}}`} id="portfolio">
      <div className={styles.portfolioContent}>
        <div className={styles.titleWrap}>
          {!tnx && <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ПОРТФОЛИО" mainTitle onClick={() => setTab(6)}/>
          {tab === 6 && <div className={`${styles.underline} ${isDarkTheme ? styles.dark : styles.light}`}></div>}
          </div>}
        </div>
        <section className={styles.tabsContentWrapper}>
          <div className={`${styles.tabs} ${isDarkTheme ? styles.dark : styles.light}`}>
            {tabs.map((el, i) => (
              <div key={i} className={`${styles.tab} ${tab === el.key ? styles.active : {}}`} onClick={() => setTab(el.key)}>
                <p>{el.title}</p>
              </div>
            ))}
          </div>
          {tab === 0 && <TabContent videos={videosPresent} isDarkTheme={isDarkTheme} screenSize={screenSize}/>}
          {tab === 1 && <TabContent videos={videos2d} isDarkTheme={isDarkTheme} screenSize={screenSize}/>}
          {tab === 2 && <TabContent videos={videos3d} isDarkTheme={isDarkTheme} screenSize={screenSize}/>}
          {tab === 3 && <TabContent videos={videosViews} isDarkTheme={isDarkTheme} screenSize={screenSize}/>}
          {tab === 4 && <TabContent videos={videosAdv} isDarkTheme={isDarkTheme} screenSize={screenSize}/>}
          {tab === 5 && <TabContent videos={videosStory} isDarkTheme={isDarkTheme} screenSize={screenSize}/>}
          {tab === 6 && <TabContent videos={videosPortfolio} isDarkTheme={isDarkTheme} screenSize={screenSize}/>}

          
        </section>
      </div>
    </div>
  );
};

export default Portfolio;



const TabContent = ({videos, isDarkTheme, screenSize}) => {
  const slides = videos.map((el, i) => (
    <div className={styles.tabsContent} key={i}>
      {el.elements.map((el, i) => (
        <VideoPlayer
          key={i}
          width={screenSize > 1560 ? "500px" : "330px"}
          height={isDarkTheme && screenSize > 1560 ? "280px" : !isDarkTheme && screenSize > 1560 ? "300px" : isDarkTheme && screenSize < 1560 ? "188px" : "198px"}
          isDarkTheme={isDarkTheme}
          src={el.src}
          itemId={el.id}
        />
      ))}
    </div>
  ));

  return (
    <div style={screenSize > 1560 ? { width: "1560px"} : { width: "1000px"}}>
      <Carousel array={slides} isDarkTheme={isDarkTheme} portfolio screenSize={screenSize}/>
    </div>
  );
};