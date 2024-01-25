import { useSnapCarousel } from "react-snap-carousel";
import CustomDot from "./CustomDot";
import LeftArrow from "../svgs/arrow-client-left-black.svg";
import LeftArrowMobile from "../svgs/arrow-client-left-black-clients-mobile.svg";

import RightArrow from "../svgs/arrow-client-right-black.svg";
import RightArrowMobile from "../svgs/arrow-client-right-black-clients-mobile.svg";

import LeftArrowLight from "../svgs/arrow-client-left-light.svg";
import LeftArrowLightMobile from "../svgs/arrow-client-left-light-mobile-clients.svg";

import RightArrowLight from "../svgs/arrow-client-right-light.svg";
import RightArrowLightMobile from "../svgs/arrow-client-right-light-mobile-clients.svg";

import styles from "../styles/Carousel.module.scss";

const Carousel = ({ array, isDarkTheme, portfolio, screenSize }) => {
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
          {isDarkTheme ? <img src={screenSize > 720 ? LeftArrow : LeftArrowMobile} /> : <img src={screenSize > 720 ? LeftArrowLight : LeftArrowLightMobile} />}
        </div>
        {isDarkTheme && screenSize > 720 && <div className={styles.test1} style={portfolio ? {left: screenSize < 1560 ? "500px" : "790px"} : {}}></div>}

        <div className={styles.dots}>
          {array.map((_, i) => (
            <CustomDot isDarkTheme={isDarkTheme} onClick={() => goTo(i)} isSelected={i === activePageIndex} key={i} />
          ))}
        </div>
        <div onClick={() => next()} className={`${styles.arrow} ${styles.right}`}>
          {isDarkTheme ? <img src={screenSize > 720 ? RightArrow : RightArrowMobile} /> : <img src={screenSize > 720 ? RightArrowLight : RightArrowLightMobile} />}
        </div>
        {isDarkTheme && screenSize > 720 && <div className={styles.test2} style={portfolio ? {left: screenSize < 1560 ? "316px" : "600px"} : {}}></div>}
      </div>
    </>
  );
};

export default Carousel;
