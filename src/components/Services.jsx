import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Services.module.scss";
import Title from "./Title";
import ArrowBlack from "../svgs/gamepad-arrow-black.svg";
import ArrowLight from "../svgs/gamepad-arrow-light.svg";
import { gameButtons, gameContents, gameContentsmobile } from "./contants";
import VideoPlayerSmall from "./VideoPlayerSmall";
import LeftArrowBlackMobile from "../svgs/arrow-client-left-black-mobile.svg";
import RightArrowBlackMobile from "../svgs/arrow-client-right-black-mobile.svg";
import LeftArrowLightMobile from "../svgs/arrow-client-left-light-mobile.svg";
import RightArrowLightMobile from "../svgs/arrow-client-right-light-mobile.svg";
import { useSnapCarousel } from "react-snap-carousel";

const Services = ({ isDarkTheme, screenSize }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [activeMobileButton, setActiveMobileButton] = useState(0);

  const [autoChange, setAutoChange] = useState(true);
  const [showEllipse, setShowEllipse] = useState(null);
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();

  useEffect(() => {
    let interval =
      autoChange &&
      setInterval(() => {
        setActiveButton((prev) => (prev === 5 ? 0 : prev + 1));
      }, 5000);
    return () => clearInterval(interval);
  }, [autoChange]);

  const withPlay = () => {
    setAutoChange(false);
  };

  const handleMouseEnter = (i) => () => {
    setShowEllipse(i);
  };

  const handleMouseLeave = (i) => () => {
    setShowEllipse(null);
  };

  const mobileItems = gameContentsmobile.map((el, i) => <ServiceItem key={i} data={el} isDarkTheme={isDarkTheme} />);

  const goToPage = (index) => () => {
    // setActiveMobileButton(index);
    goTo(index);
  };
  return (
    <div className={`${styles.servicesWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="services">
      <div className={styles.servicesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ВИДЫ УСЛУГ" mainTitle width={screenSize < 720 ? "140px" : screenSize > 1560 ? "368px" : "214px"} />
        </div>

        {screenSize > 720 ? (
          <div className={`${styles.gamepad} ${isDarkTheme ? styles.dark : styles.light}`}>
            {gameButtons.map((el, i) => (
              <div className={`${styles.gameButton} ${activeButton === i ? styles.active : {}}`} key={i} onMouseEnter={handleMouseEnter(i)} onMouseLeave={handleMouseLeave(i)}>
                {activeButton === i && <div className={styles[`eclipse${i}`]}></div>}
                {showEllipse === i && activeButton !== i && <div className={styles[`eclipse${i}`]}></div>}

                <p
                  className={styles.gameTitle}
                  onClick={() => {
                    setActiveButton(i);
                    setAutoChange(false);
                  }}
                >
                  {el.title}
                </p>
              </div>
            ))}
            <div className={`${styles.gamepadContent} ${isDarkTheme ? styles.dark : styles.light}`}>
              <div className={styles.wrapper}>
                <div className={styles.descriptionWrapper}>
                  <h3>ОПИСАНИЕ УСЛУГИ</h3>
                  {gameContents[activeButton].descr.map((el, i) => (
                    <div key={i} className={styles.descrItem}>
                      {isDarkTheme ? <img src={ArrowBlack} width={5} height={20} /> : <img src={ArrowLight} width={5} height={20} />}
                      <p>{el}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.example}>
                  <h3>ПРИМЕР</h3>
                  <VideoPlayerSmall service={gameContents[activeButton]} withPlay={withPlay} />
                </div>
              </div>
              <div className={styles.price}>
                <h3>СТОИМОСТЬ</h3>
                {gameContents[activeButton].price.map((el, i) => (
                  <div key={i} className={styles.priceItem}>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={`${styles.gamepadMobile} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.gamepadMobileMenu}>
              <div className={styles.gamepadMobileMenuBlock}>
                <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 0 ? styles.activeMenuMobileItem : {}}`} onClick={goToPage(0)}>
                  <p>ПРЕЗЕНТАЦИОННЫЕ РОЛИКИ</p>
                </div>
                <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 1 ? styles.activeMenuMobileItem : {}}`} onClick={goToPage(1)}>
                  <p>2D АНИМАЦИЯ</p>
                </div>
                <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 2 ? styles.activeMenuMobileItem : {}}`} onClick={goToPage(2)}>
                  <p>3D АНИМАЦИЯ</p>
                </div>
              </div>
              <div className={styles.gamepadMobileMenuBlock}>
                <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 3 ? styles.activeMenuMobileItem : {}}`} onClick={goToPage(3)}>
                  <p>РЕКЛАМНЫЕ РОЛИКИ</p>
                </div>
                <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 4 ? styles.activeMenuMobileItem : {}}`} onClick={goToPage(4)}>
                  <p>ВИДЕООБЗОРЫ ПРОДУКЦИИ</p>
                </div>
                <div className={`${styles.gamepadMobileMenuItem} ${activeMobileButton === 5 ? styles.activeMenuMobileItem : {}}`} onClick={goToPage(5)}>
                  <p>СТОРИТЕЙЛ ВИДЕО</p>
                </div>
              </div>
            </div>
            <div className={`${styles.slider} ${isDarkTheme ? styles.dark : styles.light}`}>
              <Slider
                array={mobileItems}
                isDarkTheme={isDarkTheme}
                screenSize={screenSize}
                setActiveMobileButton={setActiveMobileButton}
                scrollRef={scrollRef}
                pages={pages}
                activePageIndex={activePageIndex}
                next={next}
                prev={prev}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;

const ServiceItem = ({ isDarkTheme, data }) => {
  return (
    <div className={`${styles.mobileMenuItem} ${isDarkTheme ? styles.dark : styles.light}`}>
      <h5>{data.title}</h5>
      <div className={styles.contentMobileWrapper}>
        <div className={styles.contentMobileBlock}>
          <h6>ОПИСАНИЕ УСЛУГИ</h6>
          {data.descr.map((el, i) => (
            <div key={i} className={styles.descrItem}>
              {isDarkTheme ? <img src={ArrowBlack} width={5} height={20} /> : <img src={ArrowLight} width={5} height={20} />}
              <p>{el}</p>
            </div>
          ))}
          <h6 style={{ margin: "8px 0 2px 14px" }}>СТОИМОСТЬ</h6>
          {data.price.map((el, i) => (
            <div key={i} className={styles.priceItem}>
              {el}
            </div>
          ))}
        </div>
        <div className={styles.contentMobileBlock}>
          <h6>ПРИМЕР</h6>
          <VideoPlayerMobile service={gameContents[0]} />
        </div>
      </div>
    </div>
  );
};

const VideoPlayerMobile = ({ service }) => {
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
    setIsPlaying(true);
  };
  return (
    <div className={styles.videoWrapperMobile}>
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

const Slider = ({ array, isDarkTheme, setActiveMobileButton, scrollRef, pages, activePageIndex, next, prev }) => {
  useEffect(() => {
    setActiveMobileButton(activePageIndex);
  }, [activePageIndex]);

  return (
    <>
      <ul ref={scrollRef} className={styles.carousel}>
        {array.map((el, i) => (
          <li key={i} className={styles.carouselItem}>
            {el}
          </li>
        ))}
      </ul>
      {/* <div className={styles.controlls}>
        <div onClick={() => prev()} className={`${styles.arrow} ${styles.left}`}>
          {activePageIndex !== 0 && (isDarkTheme ? <img src={LeftArrowBlackMobile} /> : <img src={LeftArrowLightMobile} />)}
        </div>
        <div onClick={() => next()} className={`${styles.arrow} ${styles.right}`}>
          {activePageIndex !== pages.length - 1 && (isDarkTheme ? <img src={RightArrowBlackMobile} /> : <img src={RightArrowLightMobile} />)}
        </div>
      </div> */}
    </>
  );
};
