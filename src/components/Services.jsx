import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Services.module.scss";
import Title from "./Title";
import ArrowBlack from "../svgs/gamepad-arrow-black.svg";
import ArrowLight from "../svgs/gamepad-arrow-light.svg";
import { gameButtons, gameContents } from "./contants";
import VideoPlayerSmall from "./VideoPlayerSmall";

const Services = ({ isDarkTheme, screenSize }) => {

  const [activeButton, setActiveButton] = useState(0);
  const [autoChange, setAutoChange] = useState(true);
  const [showEllipse, setShowEllipse] = useState(null);

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

  return (
    <div className={`${styles.servicesWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="services">
      <div className={styles.servicesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ВИДЫ УСЛУГ" mainTitle width={screenSize > 1560 ? "368px" : "214px"} />
        </div>

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
                    {isDarkTheme ? <img src={ArrowBlack} width={5} height={20}/> : <img src={ArrowLight} width={5} height={20}/>}
                    <p>{el}</p>
                  </div>
                ))}
              </div>
              <div className={styles.example}>
                <h3>ПРИМЕР</h3>
                <VideoPlayerSmall service={gameContents[activeButton]} withPlay={withPlay}/>
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
      </div>
    </div>
  );
};

export default Services;
