import React, { useEffect, useState } from "react";
import styles from "../styles/Portfolio.module.scss";
import Title from "./Title";
import VideoPlayer from "./VideoPlayer";
import Carousel from "./Carousel";
import {
  videos2d,
  videos2dMobile,
  videos3d,
  videos3dMobile,
  videosAdv,
  videosAdvMobile,
  videosPortfolio,
  videosPortfolioMobile,
  videosPresent,
  videosPresentMobile,
  videosStory,
  videosStoryMobile,
  videosViews,
  videosViewsMobile,
} from "./contants";
import { useSnapCarousel } from "react-snap-carousel";
import LeftArrowBlackMobile from "../svgs/arrow-client-left-black-mobile.svg";
import RightArrowBlackMobile from "../svgs/arrow-client-right-black-mobile.svg";
import LeftArrowLightMobile from "../svgs/arrow-client-left-light-mobile.svg";
import RightArrowLightMobile from "../svgs/arrow-client-right-light-mobile.svg";

const Portfolio = ({ isDarkTheme, tab, setTab, screenSize, tnx }) => {
  const [activeMobileButton, setActiveMobileButton] = useState(0);
  const [lentLenght, setlentLenght] = useState(6);

  const tabs = [
    { title: "ПРЕЗЕНТАЦИОННЫЕ \n РОЛИКИ", key: 0 },
    { title: "2D \n АНИМАЦИЯ", key: 1 },
    { title: "3D \n АНИМАЦИЯ", key: 2 },
    { title: "РЕКЛАМНЫЕ \n РОЛИКИ", key: 3 },
    { title: "ВИДЕООБЗОРЫ \n ПРОДУКЦИИ", key: 4 },
    { title: "СТОРИТЕЛЛИНГ \n ВИДЕО", key: 5 },
  ];

  const mobileDataItems = [videosPresentMobile, videos2dMobile, videos3dMobile, videosViewsMobile, videosAdvMobile, videosStoryMobile, videosPortfolioMobile];
  const mobileItems = mobileDataItems[activeMobileButton].map((el, i) => <MobilePortfolioItem key={i} data={el} isDarkTheme={isDarkTheme} />);

  return (
    <div className={`${styles.portfolioWrapper} ${isDarkTheme ? styles.dark : styles.light} ${tnx ? styles.tnx : {}}`} id="portfolio">
      {screenSize > 720 ? (
        <div className={styles.portfolioContent}>
          <div className={styles.titleWrap}>
            {!tnx && (
              <div className={styles.title}>
                <Title isDarkTheme={isDarkTheme} text="ПОРТФОЛИО" mainTitle onClick={() => setTab(6)} />
                {tab === 6 && <div className={`${styles.underline} ${isDarkTheme ? styles.dark : styles.light}`}></div>}
              </div>
            )}
          </div>
          <section className={styles.tabsContentWrapper}>
            <div className={`${styles.tabs} ${isDarkTheme ? styles.dark : styles.light}`}>
              {tabs.map((el, i) => (
                <div key={i} className={`${styles.tab} ${tab === el.key ? styles.active : {}}`} onClick={() => setTab(el.key)}>
                  <p>{el.title}</p>
                </div>
              ))}
            </div>
            {tab === 0 && <TabContent videos={videosPresent} isDarkTheme={isDarkTheme} screenSize={screenSize} />}
            {tab === 1 && <TabContent videos={videos2d} isDarkTheme={isDarkTheme} screenSize={screenSize} />}
            {tab === 2 && <TabContent videos={videos3d} isDarkTheme={isDarkTheme} screenSize={screenSize} />}
            {tab === 3 && <TabContent videos={videosViews} isDarkTheme={isDarkTheme} screenSize={screenSize} />}
            {tab === 4 && <TabContent videos={videosAdv} isDarkTheme={isDarkTheme} screenSize={screenSize} />}
            {tab === 5 && <TabContent videos={videosStory} isDarkTheme={isDarkTheme} screenSize={screenSize} />}
            {tab === 6 && <TabContent videos={videosPortfolio} isDarkTheme={isDarkTheme} screenSize={screenSize} />}
          </section>
        </div>
      ) : (
        <div className={`${styles.portfolioContentMobile} ${isDarkTheme ? styles.dark : styles.light}`}>
          <div className={styles.title}>
            <Title isDarkTheme={isDarkTheme} text="ПОРТФОЛИО" mainTitle onClick={() => setActiveMobileButton(6)} />
            {activeMobileButton === 6 && <div className={`${styles.underline} ${isDarkTheme ? styles.dark : styles.light}`}></div>}
          </div>
          <div className={styles.gamepadMobileMenu}>
            <div className={styles.gamepadMobileMenuBlock}>
              <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 0 ? styles.activeMenuMobileItem : {}}`} onClick={() => setActiveMobileButton(0)}>
                <p>ПРЕЗЕНТАЦИОННЫЕ РОЛИКИ</p>
              </div>
              <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 1 ? styles.activeMenuMobileItem : {}}`} onClick={() => setActiveMobileButton(1)}>
                <p>2D АНИМАЦИЯ</p>
              </div>
              <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 2 ? styles.activeMenuMobileItem : {}}`} onClick={() => setActiveMobileButton(2)}>
                <p>3D АНИМАЦИЯ</p>
              </div>
            </div>
            <div className={styles.gamepadMobileMenuBlock}>
              <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 3 ? styles.activeMenuMobileItem : {}}`} onClick={() => setActiveMobileButton(3)}>
                <p>РЕКЛАМНЫЕ РОЛИКИ</p>
              </div>
              <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 4 ? styles.activeMenuMobileItem : {}}`} onClick={() => setActiveMobileButton(4)}>
                <p>ВИДЕООБЗОРЫ ПРОДУКЦИИ</p>
              </div>
              <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 5 ? styles.activeMenuMobileItem : {}}`} onClick={() => setActiveMobileButton(5)}>
                <p>СТОРИТЕЙЛ ВИДЕО</p>
              </div>
            </div>
          </div>
          <div className={`${styles.slider} ${isDarkTheme ? styles.dark : styles.light}`}>
            <Slider array={mobileItems} isDarkTheme={isDarkTheme} lentLenght={mobileDataItems[activeMobileButton].length} activeMobileButton={activeMobileButton} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

const TabContent = ({ videos, isDarkTheme, screenSize }) => {
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
    <div style={screenSize > 1560 ? { width: "1560px" } : { width: "1000px" }}>
      <Carousel array={slides} isDarkTheme={isDarkTheme} portfolio screenSize={screenSize} />
    </div>
  );
};

const MobilePortfolioItem = ({ data, isDarkTheme }) => {
  return (
    <div style={{ width: "300px", height: isDarkTheme ? "580px" : "600px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {data.map((el, i) => (
        <VideoPlayer key={i} width={"330px"} height={"198px"} isDarkTheme={isDarkTheme} src={el.src} itemId={el.id} />
      ))}
    </div>
  );
};
const Slider = ({ array, isDarkTheme, lentLenght, activeMobileButton }) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
  const [w, setW] = useState(14);
  useEffect(() => {
    goTo(0);
  }, [activeMobileButton]);

  console.log(activeMobileButton);
  console.log(activePageIndex);
  return (
    <>
      <ul ref={scrollRef} className={styles.carousel}>
        {array.map((el, i) => (
          <li key={i} className={styles.carouselItem}>
            {el}
          </li>
        ))}
      </ul>
      <div className={styles.controlls}>
        <div onClick={() => prev()} className={`${styles.arrow} ${styles.left}`}>
          {activePageIndex !== 0 && (isDarkTheme ? <img src={LeftArrowBlackMobile} /> : <img src={LeftArrowLightMobile} />)}
        </div>
        <div className={`${styles.sliderLoader} ${isDarkTheme ? styles.dark : styles.light}`}>
          <div className={styles.filler} style={{ width: `${(80 / lentLenght) * (activePageIndex + 1)}px` }}></div>
        </div>
        <div onClick={() => next()} className={`${styles.arrow} ${styles.right}`}>
          {activePageIndex !== pages.length - 1 &&
            (isDarkTheme ? (
              <img src={RightArrowBlackMobile} style={{ display: activeMobileButton === 5 && activePageIndex === 3 ? "none" : "inline-block" }} />
            ) : (
              <img src={RightArrowLightMobile} style={{ display: activeMobileButton === 5 && activePageIndex === 3 ? "none" : "inline-block" }} />
            ))}
        </div>
      </div>
    </>
  );
};
