import React, { useState } from "react";
import styles from "../styles/Reasons.module.scss";
import Title from "./Title";
import LogoBlack from "../svgs/reasons-logo-black.svg";
import LogoBlackMedium from "../svgs/reasons-logo-black-medium.svg";
import PlayLight from "../pngs/playLight.webp";

import Reason from "./Reason";

const Reasons = ({ isDarkTheme, screenSize }) => {
  return (
    <div className={`${styles.reasonsWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="reasons">
      <div className={styles.reasonsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ПОЧЕМУ ВЫБИРАЮТ НАС?" mainTitle width={screenSize > 1560 ? "746px" : "434px"} left={"36px"}/>
          {!isDarkTheme && <div className="white-title-underline"></div>}
        </div>
        <section className={styles.reasonsWrap}>
          <div className={styles.leftContent}>
            <Reason
            screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              title={"Практический опыт"}
              text={
                "За 8 лет работы мы реализовали более 560 проектов для 180 корпоративных клиентов. Наш опыт помогает построить эффективный производственный процесс под задачу клиента."
              }
            />
            <Reason
            screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              title={"Работа в рамках бюджета"}
              text={
                "Согласовывая бюджет создания видео, мы берем обязательства, которые соблюдаем до завершения работ. И наши клиенты застрахованы от внезапных дополнительных расходов."
              }
            />
            <Reason
            screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              title={"Решение бизнес задач"}
              text={
                "Наша работа начинается  с анализа бизнеса клиента, его потребностей при создании видео, целей, которые нужно достичь. И данная информация лежит в основе при реализации ролика."
              }
            />
          </div>
          {isDarkTheme ? (
            <div className={styles.playContentBlack}>
              {screenSize > 1560 ? <img src={LogoBlack} /> : <img src={LogoBlackMedium} />}
            </div>
          ) : (
            <div className={styles.playContentLight}>
              <img src={PlayLight} width={390} height={371}/>
            </div>
          )}

          <div className={styles.rightContent}>
            <Reason
            screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              title={"Комплексное решение"}
              text={
                "Наша студия обеспечивает полный цикл видеопроизводства – от постановки задачи, создания креативов и сценария до саунд-дизайна и цвеоткоррекции финальной версии видео. "
              }
            />
            <Reason
            screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              title={"Доверие крупных брендов"}
              text={
                "Успешный опыт работы с крупными компаниями и корпорациями: Согаз, Сбербанк, X5 Group, структуры РЖД, Omron, Правительство Москвы, ООН, и многими другими."
              }
            />
            <Reason
            screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              title={"Современные тенденции видео"}
              text={
                "Мы применяем лучшие современные решения визуальной подачи, используем мировой опыт и тенденции в нашей отрасли. И создаем эксклюзивное видео для каждого нашего проекта."
              }
            />
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default Reasons;
