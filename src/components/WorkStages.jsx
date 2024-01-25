import React, { useState } from "react";
import styles from "../styles/WorkStages.module.scss";
import Title from "./Title";
import WorkStage from "./WorkStage";
import plusLight from "../pngs/plus-light.svg";
import plusBlack from "../pngs/plus-black.svg";
import black01 from "../pngs/01-black.png";
import black02 from "../pngs/02-black.png";
import black03 from "../pngs/03-black.png";
import black04 from "../pngs/04-black.png";
import black05 from "../pngs/05-black.png";
import black06 from "../pngs/06-black.png";
import light01 from "../pngs/01-light.png";
import light02 from "../pngs/02-light.png";
import light03 from "../pngs/03-light.png";
import light04 from "../pngs/04-light.png";
import light05 from "../pngs/05-light.png";
import light06 from "../pngs/06-light.png";
const WorkStages = ({ isDarkTheme, screenSize }) => {
  const largeScreen = screenSize > 1560;

  const firstItemLeft = isDarkTheme && largeScreen ? "10px" : !isDarkTheme && largeScreen ? "20px" : isDarkTheme && !largeScreen ? "4px" : "8px";
  const secondItemLeft = isDarkTheme && largeScreen ? "436px" : !isDarkTheme && largeScreen ? "460px" : isDarkTheme && !largeScreen ? "314px" : "320px";
  const secondItemTop = isDarkTheme && largeScreen ? "50px" : !isDarkTheme && largeScreen ? "60px" : isDarkTheme && !largeScreen ? "30px" : "32px";
  const thirdItemLeft = isDarkTheme && largeScreen ? "906px" : !isDarkTheme && largeScreen ? "930px" : isDarkTheme && !largeScreen ? "652px" : "658px";
  const fourthItemLeft = isDarkTheme && largeScreen ? "180px" : !isDarkTheme && largeScreen ? "200px" : isDarkTheme && !largeScreen ? "120px" : "136px";
  const fourthItemTop = isDarkTheme && largeScreen ? "666px" : !isDarkTheme && largeScreen ? "666px" : isDarkTheme && !largeScreen ? "476px" : "466px";
  const fivethItemLeft = isDarkTheme && largeScreen ? "660px" : !isDarkTheme && largeScreen ? "680px" : isDarkTheme && !largeScreen ? "472px" : "480px";
  const fivethItemTop = isDarkTheme && largeScreen ? "666px" : !isDarkTheme && largeScreen ? "666px" : isDarkTheme && !largeScreen ? "478px" : "466px";
  const sixthItemLeft = isDarkTheme && largeScreen ? "1150px" : !isDarkTheme && largeScreen ? "1170px" : isDarkTheme && !largeScreen ? "830px" : "830px";
  const sixthItemTop = isDarkTheme && largeScreen ? "666px" : !isDarkTheme && largeScreen ? "666px" : isDarkTheme && !largeScreen ? "476px" : "466px";

  const mobileData = [
    { image: [black01, light01], title: "БРИФИРОВАНИЕ. ОБСУЖДЕНИЕ", description: "1. Обсуждение проекта на встрече или по телефону", height: "10px" },
    {
      image: [black02, light02],
      title: "ПРОЕКТИРОВАНИЕ ПРОЕКТА. ПОДГОТОВКА КП",
      description: "2. Подготовка концепции и сметы. Согласование. Подписание договора.",
      height: "10px",
    },
    {
      image: [black03, light03],
      title: "КРЕАТИВНАЯ СТРАТЕГИЯ",
      description: "3.1  Анимационные видео: создание сценария и раскадровки. Согласовывание.",
      description2: "3.2 Видео на основе видеосъемки: создание сценария. Согласование. Подготовка к съемке.",
      height: "40px",
    },
    {
      image: [black04, light04],
      title: "ПРОДАКШН",
      description: "4.1 Создание моделей, анимация, текстурирование. озвучка. Согласование.",
      description2: "4.2 видео на основе видеосъемки: проведение постановчной видеосъемки. Монтаж. Оформление 2d/3d графикой. Согласование.",
      height: "50px",
    },
    { image: [black05, light05], title: "КОРРЕКТИВЫ", description: "5. Внесение корректив и создание финальной версии видео.", height: "10px" },
    { image: [black06, light06], title: "ИТОГ", description: "6. Сдача готового видеоролика. Подписание акта выполненных работ.", height: "10px" },
  ];
  return (
    <div className={`${styles.workStagesWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.workStagesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ЭТАПЫ РАБОТЫ" mainTitle width={largeScreen ? "454px" : "264px"} left={largeScreen ? "26px" : "14px"} />
        </div>

        {screenSize > 720 ? (
          <div className={`${styles.stages}  ${isDarkTheme ? styles.dark : styles.light}`}>
            <WorkStage
              screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              left={firstItemLeft}
              top={largeScreen ? "50px" : "30px"}
              title={"БРИФИРОВАНИЕ. ОБСУЖДЕНИЕ"}
              text={"1. Обсуждение проекта на встрече или по телефону"}
            />
            <WorkStage
              screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              left={secondItemLeft}
              top={secondItemTop}
              four
              title={"КРЕАТИВНАЯ СТРАТЕГИЯ"}
              text={"3.1 Анимационные видео: создание сценария и раскадровки. Согласовывание."}
              text2={"3.2 Видео на основе видеосъемки: создание сценария. Согласование. Подготовка к съемке."}
            />
            <WorkStage
              screenSize={screenSize}
              isDarkTheme={isDarkTheme}
              left={thirdItemLeft}
              top={largeScreen ? "50px" : "30px"}
              title={"КОРРЕКТИВЫ"}
              text={"5. Внесение корректив и создание финальной версии видео."}
            />
            <WorkStage
              screenSize={screenSize}
              topArr
              isDarkTheme={isDarkTheme}
              left={fourthItemLeft}
              top={fourthItemTop}
              title={"ПРОЕКТИРОВАНИЕ ПРОЕКТА. ПОДГОТОВКА КП"}
              text={"2. Подготовка концепции и сметы. Согласование. Подписание договора."}
            />
            <WorkStage
              screenSize={screenSize}
              topArr
              isDarkTheme={isDarkTheme}
              left={fivethItemLeft}
              top={fivethItemTop}
              title={"ПРОДАКШН"}
              text={"4.1 Создание моделей, анимация, текстурирование. озвучка. Согласование."}
              four
              text2={"4.2 видео на основе видеосъемки: проведение постановчной видеосъемки. Монтаж. Оформление 2d/3d графикой. Согласование."}
            />
            <WorkStage
              screenSize={screenSize}
              topArr
              isDarkTheme={isDarkTheme}
              left={sixthItemLeft}
              top={sixthItemTop}
              title={"ИТОГ"}
              text={"6. Сдача готового видеоролика. Подписание акта выполненных работ."}
            />
          </div>
        ) : (
          <div className={styles.workstagesMobile}>
            {mobileData.map((el, i) => (
              <MobileItem title={el.title} description={el.description} image={el.image} key={i} isDarkTheme={isDarkTheme} description2={el.description2} height={el.height} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkStages;

const MobileItem = ({ title, description, image, isDarkTheme, description2, height }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.mobileStageItem} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.mobileStageItemHeader}>
        <img src={isDarkTheme ? image[0] : image[1]} />
        <h4 className={isDarkTheme ? styles.dark : styles.light}>{title}</h4>
        <img src={isDarkTheme ? plusBlack : plusLight} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div className={styles.mobileStageItemContent} style={{ height: height }}>
          <p className={isDarkTheme ? styles.dark : styles.light}>
            {description}{" "}
            {description2 && (
              <>
                <br />
                {description2}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};
