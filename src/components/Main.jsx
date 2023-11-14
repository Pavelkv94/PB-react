import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.scss";
import VideoPlayer from "./VideoPlayer";
import { Link, animateScroll as scroll } from "react-scroll";
// import NextLink from "next/link";

const Main = ({ isDarkTheme, screenSize }) => {
  const [position, setPosition] = useState(180); // Initial position

  // const switchTheme = () => {
  //   toggleTheme();
  //   setPosition((prevPosition) => (prevPosition === 0 ? 180 : 0));
  // };

  useEffect(() => {
    setPosition(isDarkTheme ? 0 : 180);
  }, [isDarkTheme])

  return (
    <div className={`${styles.mainWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="main">
      <div className={styles.mainContent}>
        <div className={styles.themeSwitcherWrapper}>
        <a href={isDarkTheme ? "/white" : "/"}><div className={`${styles.themeSwitcher} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.pulse}></div>
            <div  className={styles.toggler} style={{ transform: `translateX(${position}%)`, transition: "transform 0.3s ease" }}>
              <div className={styles.togglerBox}></div>
            </div>
          </div></a>
        </div>

        <div className={styles.mainInfo}>
          <div className={`${styles.textInfo} ${isDarkTheme ? styles.dark : styles.light}`}>
            <p className={styles.preTitle}>VIDEO AGENCY</p>
            <h1>ПРОИЗВОДСТВО КОРПОРАТИВНЫХ ВИДЕО </h1>
            <section>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>ПРЕЗЕНТАЦИОННЫЕ</p>
              </div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>РЕКЛАМНЫЕ</p>
              </div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>ОБРАЗОВАТЕЛЬНЫЕ</p>
              </div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>ИМИДЖЕВЫЕ</p>
              </div>
            </section>

            <div className={`${styles.actions} ${isDarkTheme ? styles.dark : styles.light}`}>
              <div>
                <Link to="order" spy={true} smooth={true} offset={-100} duration={500}>
                  <button style={isDarkTheme ? {} : { background: "linear-gradient(137.83deg, #0076e4 -38%, #7abfff 21.36%, #c1fdfe 80.72%, #98fcfe 140.08%)" }}>
                    ОСТАВИТЬ ЗАЯВКУ
                  </button>
                </Link>
              </div>
              <div>
                <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
                  <button>СМОТРЕТЬ ПОРТФОЛИО</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.showInfo} ${isDarkTheme ? styles.dark : styles.light}`}>
            {isDarkTheme && <p className={styles.showreelP}>SHOWREEL</p>}
            <VideoPlayer
              width={screenSize < 1560 ? "650px" : "745px"}
              height={screenSize < 1560 ? "433px" : "475px"}
              style={{ position: "absolute", right: 0, bottom: 0 }}
              isDarkTheme={isDarkTheme}
              big
              src={"https://www.youtube.com/embed/2ZQtDSz6j8Y?si=n_6gajAlx3KyVIHo&modestbranding=1&autoplay=1&showinfo=0"}
              screenSize={screenSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
