import React, { useEffect, useState } from "react";
import styles from "../styles/Reason.module.scss";
import ArrowBlack1 from "../svgs/arrow-black-1.svg";
import ArrowBlack2 from "../svgs/arrow-black-2.svg";
import ArrowBlack3 from "../svgs/arrow-black-3.svg";
import ArrowLight1 from "../svgs/arrow-light-1.svg";
import ArrowLight2 from "../svgs/arrow-light-2.svg";
import ArrowLight3 from "../svgs/arrow-light-3.svg";

const Reason = ({ isDarkTheme, title, text, screenSize }) => {

  const largeScreen = screenSize > 1560;

  const dynamicHeight = largeScreen ? "210px" : "162px";
  const initHeight = largeScreen ? "94px" : "75px"

  const [height, setHeight] = useState(initHeight);

    const handleClick = () => setHeight(height === dynamicHeight ? initHeight : dynamicHeight);

    const [arrowAnim, setArrowAnim] = useState(1);

    useEffect(() => {
      let timeout = setInterval(() => {
        arrowAnim === 1 ? setArrowAnim(2) : arrowAnim === 2 ? setArrowAnim(3) : setArrowAnim(1);
      }, 200)

      return () => clearInterval(timeout);
    }, [arrowAnim]);

    const handleSetArrow = () => {
      if(isDarkTheme) {
        return arrowAnim === 1 ? <img src={ArrowBlack1} className="arrow-black"/> : arrowAnim === 2 ? <img src={ArrowBlack2} /> : <img src={ArrowBlack3} />
      } else {
        return arrowAnim === 1 ? <img src={ArrowLight1} className="arrow-light"/> : arrowAnim === 2 ? <img src={ArrowLight2} /> : <img src={ArrowLight3} />
      }
    };
   
  return (
    <section className={`${styles.reason} ${isDarkTheme ? styles.dark : styles.light}`} style={{height: height}}>
        <h4>{title}</h4>
        <div className={styles.arrows} onClick={handleClick}>
        {handleSetArrow()}
        </div>
        <p style={{opacity: height === dynamicHeight ? 1 : 0, }} className={styles[height === dynamicHeight ? "full" : "notFull"]}>
            {text}
        </p>
    </section>
  );
};

export default Reason;
