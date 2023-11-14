import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import styles from "../styles/Thanks.module.scss";
import LogoBlack from "../svgs/logo-black.svg";
import LogoLight from "../svgs/logo-light.svg";
import policy from "../docs/Pocily plan-big.space.pdf";

const Thanks = ({ isDarkTheme }) => {
  const [tab, setTab] = useState(0);
  const [screenSize, setScreenSize] = useState(null);
  const email = isDarkTheme ? "Welcome@plan-big.space" : "Info@plan-big.space";

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.thanks} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.tnxDescription}>
        <div className={styles.logo}>{isDarkTheme ? <LogoBlack /> : <LogoLight />}</div>
        <h5>БЛАГОДАРИМ ЗА ОСТАВЛЕННУЮ ЗАЯВКУ, В СКОРОМ ВРЕМЕНИ МЫ С ВАМИ СВЯЖЕМСЯ!</h5>

        <p>
          ПРЕДЛАГАЕМ БОЛЕЕ ПОДРОБНО ОЗНАКОМИТЬСЯ С НАШИМ ПОРТФОЛИО
          <br />И ПОДОБРАТЬ НАИБОЛЕЕ ПОНРАВИВШИЕСЯ РАБОТЫ, ОТВЕЧАЮЩИЕ ВАШЕЙ ЗАДАЧЕ.
          <br />
          ЭТО ПОМОЖЕТ НАМ БОЛЕЕ ДЕТАЛЬНО ПОНЯТЬ СУТЬ ВАШЕГО ЗАПРОСА И КАЧЕСТВО РЕАЛИЗАЦИИ.
        </p>
      </div>
      {isDarkTheme && <div className={styles.divider}></div>}
      <Portfolio isDarkTheme={isDarkTheme} tab={tab} setTab={setTab} screenSize={screenSize} tnx/>
      <footer className={`${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={styles.footerContent}>
          <h5>Контакты</h5>
          <section>
            <div>+7 (495) 128-60-30</div>
            <div>{email}</div>
            <div>Москва, Крутицкая набережная, 1</div>
            <div><a href={policy} target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a></div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Thanks;
