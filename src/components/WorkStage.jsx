import React, { useState } from "react";
import styles from "../styles/WorkStage.module.scss";
import StagesArrowBlack from "../svgs/arrow-stages-black.svg";
import StagesArrowLight from "../svgs/arrow-stages-light.svg";
import StagesArrowBlackTop from "../svgs/arrow-stages-black-top.svg";
import StagesArrowLightTop from "../svgs/arrow-stages-light-top.svg";

const WorkStage = ({ isDarkTheme, left, top, title, text, four, text2, topArr, screenSize }) => {
  const [expand, setExpand] = useState(false);
  const dynamicHeight = screenSize > 1560 ? "300px" : "240px";
  const dynamicBottom = screenSize > 1560 ? "350px" : "280px";

  return (
    <div className={`${styles.workStage} ${isDarkTheme ? styles.dark : styles.light}`} style={{ left, top, height: expand ? dynamicHeight : "100px" }}>
      <h4>{title}</h4>
      <div className={styles.arrowIcon} onClick={() => setExpand(!expand)}>
        {isDarkTheme && topArr ? <img src={StagesArrowBlackTop} /> : !isDarkTheme && topArr ? <img src={StagesArrowLightTop} />  : isDarkTheme && !topArr ? <img src={StagesArrowBlack} /> : <img src={StagesArrowLight} />}
      </div>
      {expand && (
        <section style={{bottom: topArr ? dynamicBottom : "0"}}>
          <p>
            {text}
            {four && <br/>}
            {four && text2}</p>
        </section>
      )}
    </div>
  );
};

export default WorkStage;
