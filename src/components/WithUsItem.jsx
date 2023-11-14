import React, { useState } from "react";
import styles from "../styles/WithUsItem.module.scss";
import Lupa from "../svgs/lupa.svg";

const WithUsItem = ({ isDarkTheme, title, description, jobTitle, jobContact, widthTime, widthMoney, widthDiff, ind, setOpen, setImgUrl, imgUrl, screenSize }) => {
  const titleSize = screenSize > 1560 ? "36px" : "30px";
  const titleAloneSize = screenSize > 1560 ? "30px" : "25px";

  return (
    <div className={`${styles.withUssliderItem} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={`${styles.photo} ${styles[`photo-item${ind}`]}`}></div>
      <h3 style={{fontSize: ind === 9 ? titleAloneSize : titleSize}}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.job}>
        <p>{jobTitle}</p>
        <p>{jobContact}</p>
      </div>

      <div className={`${styles.parameters} ${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={styles.percents}>
          <p>1%</p>
          <p>100%</p>
        </div>
        <section>
          <div className={styles.indicator}>
            <div style={{ width: widthTime }}></div>
          </div>
          <p>срочность</p>
          <div className={styles.indicator}>
            <div style={{ width: widthMoney }}></div>
          </div>
          <p>бюджет</p>
          <div className={styles.indicator}>
            <div style={{ width: widthDiff }}></div>
          </div>
          <p>сложность</p>
        </section>
      </div>

      <div className={`${styles.approv} ${styles[`approv-item${ind}`]}`} onClick={() => {
        setImgUrl(imgUrl); setOpen(true);
      }}>
        <div className={styles.shadow}>
          <img src={Lupa} />
        </div>
      </div>
    </div>
  );
};

export default WithUsItem;
