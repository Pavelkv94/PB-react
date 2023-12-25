import React from "react";
import styles from "../styles/Title.module.scss";

const Title = ({ isDarkTheme, text, right = false, mainTitle, width, left, onClick, screenSize }) => {
  return mainTitle ? (
    <div className={`${styles.mainTitleWrapper} ${isDarkTheme ? styles.dark : styles.light}`} style={{minWidth: width}}>
      <p className={styles.mainTitleMain} style={onClick ? {left: left, cursor: "pointer"} : {left: left}} onClick={onClick && onClick} >{text}</p>
      <p className={styles.mainTitleDublicate} onClick={onClick && onClick} style={onClick ? {cursor: "pointer"} : {}}>{text}</p>
    </div>
  ) : (
    <div className={`${styles.titleWrapper} ${isDarkTheme ? styles.dark : styles.light}`} >
      <p className={`${styles.titleMain} ${right ? styles.right : styles.left}`} style={text === "ВИДЕОСЪЁМКА" || text === "АНИМАЦИЯ" ? {fontSize: screenSize < 720 ? "16px" : screenSize < 1560 && screenSize > 720 ? "30px" : "40px"} : {}}>{text}</p>
      <p className={`${styles.titleDublicate} ${right ? styles.right : styles.left}`} style={text === "ВИДЕОСЪЁМКА" || text === "АНИМАЦИЯ" ? {fontSize: screenSize < 720 ? "16px" : screenSize < 1560 && screenSize > 720 ? "30px" : "40px"} : {}}>{text}</p>
    </div>
  );
};

export default Title;
