import React, { useState } from "react";
import styles from "../styles/Clients.module.scss";
import Title from "./Title";
import Client from "./Client";
import Carousel from "./Carousel";
import clients1_1 from "../pngs/clients/1. Сбер-PhotoRoom 2.webp";
import clients1_2 from "../pngs/clients/4. undp-PhotoRoom 2.webp";
import clients1_3 from "../pngs/clients/5. Правительство Москвы-PhotoRoom 4.webp";
import clients1_4 from "../pngs/clients/6. РЖД-PhotoRoom 3.webp";
import clients1_5 from "../pngs/clients/3 529083.webp";
import clients1_6 from "../pngs/clients/8. Sanofi-PhotoRoom 3.webp";
import clients1_7 from "../pngs/clients/10. Teva-PhotoRoom 2.webp";
import clients1_8 from "../pngs/clients/7. Boehringer Ingelheim-PhotoRoom 3.webp";
import clients1_9 from "../pngs/clients/9. Пятёрочка-PhotoRoom 2.webp";
import clients1_10 from "../pngs/clients/image 95 (1).webp";
import clients1_11 from "../pngs/clients/2__Роснефть-transformed 2.webp";
import clients1_12 from "../pngs/clients/13. Макдональдс-PhotoRoom 2.webp";
import clients1_13 from "../pngs/clients/16. Технополис Москва-PhotoRoom 2.webp";
import clients1_14 from "../pngs/clients/14. МИСиС-PhotoRoom 2.webp";
import clients1_15 from "../pngs/clients/image 96 (1).webp";
import clients2_1 from "../pngs/clients/2 10.webp";
import clients2_2 from "../pngs/clients/28 1.webp";
import clients2_3 from "../pngs/clients/9 1.webp";
import clients2_4 from "../pngs/clients/22 1.webp";
import clients2_5 from "../pngs/clients/21 1.webp";
import clients2_6 from "../pngs/clients/18 1.webp";
import clients2_7 from "../pngs/clients/7 1.webp";
import clients2_8 from "../pngs/clients/24 1.webp";
import clients2_9 from "../pngs/clients/26 1.webp";
import clients2_10 from "../pngs/clients/29 1.webp";
import clients2_11 from "../pngs/clients/15 1.webp";
import clients2_12 from "../pngs/clients/11 1.webp";
import clients2_13 from "../pngs/clients/8 1.webp";
import clients2_14 from "../pngs/clients/10 1.webp";
import clients2_15 from "../pngs/clients/4 1.webp";
import clients3_1 from "../pngs/clients/9 2.webp";
import clients3_2 from "../pngs/clients/27 2.webp";
import clients3_3 from "../pngs/clients/12 2.webp";
import clients3_4 from "../pngs/clients/4 2.webp";
import clients3_5 from "../pngs/clients/8 2.webp";
import clients3_6 from "../pngs/clients/13 1.webp";
import clients3_7 from "../pngs/clients/28 2.webp";
import clients3_8 from "../pngs/clients/11 2.webp";
import clients3_9 from "../pngs/clients/16 2.webp";
import clients3_10 from "../pngs/clients/14 2.webp";
import clients3_11 from "../pngs/clients/15 2.webp";
import clients3_12 from "../pngs/clients/25 2.webp";
import clients3_13 from "../pngs/clients/10 2.webp";
import clients3_14 from "../pngs/clients/29 2.webp";
import clients3_15 from "../pngs/clients/26 2.webp";

const Clients = ({ isDarkTheme, screenSize }) => {
  const clients1 = [
    { img: clients1_1 },
    { img: clients1_2 },
    { img: clients1_3 },
    { img: clients1_4 },
    { img: clients1_5 },
    { img: clients1_6 },
    { img: clients1_7 },
    { img: clients1_8 },
    { img: clients1_9 },
    { img: clients1_10 },
    { img: clients1_11 },
    { img: clients1_12 },
    { img: clients1_13 },
    { img: clients1_14 },
    { img: clients1_15 },
  ];

  const clients2 = [
    { img: clients2_1 },
    { img: clients2_2 },
    { img: clients2_3 },
    { img: clients2_4 },
    { img: clients2_5 },
    { img: clients2_6 },
    { img: clients2_7 },
    { img: clients2_8 },
    { img: clients2_9 },
    { img: clients2_10 },
    { img: clients2_11 },
    { img: clients2_12 },
    { img: clients2_13 },
    { img: clients2_14 },
    { img: clients2_15 },
  ];

  const clients3 = [
    { img: clients3_1 },
    { img: clients3_2 },
    { img: clients3_3 },
    { img: clients3_4 },
    { img: clients3_5 },
    { img: clients3_6 },
    { img: clients3_7 },
    { img: clients3_8 },
    { img: clients3_9 },
    { img: clients3_10 },
    { img: clients3_11 },
    { img: clients3_12 },
    { img: clients3_13 },
    { img: clients3_14 },
    { img: clients3_15 },
  ];

  const firstSlide = (
    <div className={styles.sliderWindow}>
      {clients1.map((el, i) => (
        <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
      ))}
    </div>
  );
  const secondSlide = (
    <div className={styles.sliderWindow}>
      {clients2.map((el, i) => (
        <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
      ))}
    </div>
  );
  const thirdSlide = (
    <div className={styles.sliderWindow}>
      {clients3.map((el, i) => (
        <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
      ))}
    </div>
  );

  return (
    <div className={`${styles.clientsWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.clientsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="НАМ ДОВЕРЯЮТ" mainTitle width={screenSize > 1560 ? "464px" : "272px"} left={screenSize > 1560 ? "30px" : "15px"} />
        </div>
        <div className={styles.carousel}>
          <Carousel array={[firstSlide, secondSlide, thirdSlide]} isDarkTheme={isDarkTheme} screenSize={screenSize}/>
        </div>
      </div>
    </div>
  );
};

export default Clients;
