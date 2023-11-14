import React, { useState } from "react";
import styles from "../styles/WithUs.module.scss";
import Title from "./Title";
import WithUsItem from "./WithUsItem";
import { useSnapCarousel } from "react-snap-carousel";
import LeftArrow from "../svgs/arrow-client-left-black.svg";
import RightArrow from "../svgs/arrow-client-right-black.svg";
import LeftArrowLight from "../svgs/arrow-client-left-light.svg";
import RightArrowLight from "../svgs/arrow-client-right-light.svg";
import { feedbacks } from "./contants";

const WithUs = ({ isDarkTheme, screenSize }) => {
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const activeItemWidth = screenSize > 1560 ? 250 : 200;

  const items = feedbacks.map((el, i) => (
    <WithUsItem
      key={i}
      isDarkTheme={isDarkTheme}
      title={el.title}
      description={el.text}
      jobTitle={"Ген. директор "}
      jobContact={el.director}
      widthTime={activeItemWidth * el.urgent}
      widthMoney={activeItemWidth * el.money}
      widthDiff={activeItemWidth * el.difficult}
      ind={i + 1}
      imgUrl={el.imgUrl}
      setOpen={setOpen}
      setImgUrl={setImgUrl}
      screenSize={screenSize}
    />
  ));

  return (
    <div className={`${styles.withUsWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="feedback">
      <div className={styles.withUsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ОТЗЫВЫ НАШИХ КЛИЕНТОВ" mainTitle width={screenSize > 1560 ? "808px" : "470px"} left={screenSize > 1560 ? "50px" : "30px"} />
        {!isDarkTheme && <div className="white-title-underline"></div>}
        </div>
        <div className={styles.slider}>
          <Slider array={items} isDarkTheme={isDarkTheme} />
        </div>
      </div>
      {open && <Approvement imgUrl={imgUrl} setOpen={setOpen} screenSize={screenSize}/>}
    </div>
  );
};

export default WithUs;

const Slider = ({ array, isDarkTheme }) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();


  // const handlePrev = () => {
  //   if (activePageIndex === 0) {
  //     // If at the beginning, go to the last item for infinite loop effect
  //     goTo(array.length - 1);
  //   } else {
  //     prev();
  //   }
  // };

  // const handleNext = () => {
  //   if (activePageIndex === array.length - 1) {
  //     // If at the end, go to the first item for infinite loop effect
  //     goTo(0);
  //   } else {
  //     next();
  //   }
  // };

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
          {activePageIndex !== 0 && (isDarkTheme ? <img src={LeftArrow} /> : <img src={LeftArrowLight} />)}
        </div>
        {activePageIndex !== 0 && isDarkTheme && <div className={styles.test1}></div>}

        <div onClick={() => next()} className={`${styles.arrow} ${styles.right}`}>
          {activePageIndex !== pages.length - 1 && (isDarkTheme ? <img src={RightArrow} /> : <img src={RightArrowLight} />)}
        </div>
        {activePageIndex !== pages.length - 1 && isDarkTheme && <div className={styles.test2}></div>}

      </div>
    </>
  );
};

const Approvement = ({ imgUrl, setOpen, screenSize }) => {
  return (
    <div className={styles.approvement} onClick={() => setOpen(false)}>
      <img src={imgUrl} width={screenSize > 1560 ? 500 : 460} onClick={e => e.stopPropagation()}/>
    </div>
  );
};
