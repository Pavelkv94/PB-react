import React, { useState } from "react";
import styles from "../styles/WorkStages.module.scss";
import Title from "./Title";
import WorkStage from "./WorkStage";

const WorkStages = ({ isDarkTheme, screenSize }) => {

  const largeScreen = screenSize > 1560;

  const firstItemLeft = isDarkTheme && largeScreen ? "10px" : !isDarkTheme && largeScreen ? "20px" : isDarkTheme && !largeScreen ? "4px" : "8px"
  const secondItemLeft = isDarkTheme && largeScreen ? "436px" : !isDarkTheme && largeScreen ? "460px" : isDarkTheme && !largeScreen ? "314px" : "320px"
  const secondItemTop = isDarkTheme && largeScreen ? "50px" : !isDarkTheme && largeScreen ? "60px" : isDarkTheme && !largeScreen ? "30px" : "32px"
  const thirdItemLeft = isDarkTheme && largeScreen ? "906px" : !isDarkTheme && largeScreen ? "930px" : isDarkTheme && !largeScreen ? "652px" : "658px"
  const fourthItemLeft = isDarkTheme && largeScreen ? "180px" : !isDarkTheme && largeScreen ? "200px" : isDarkTheme && !largeScreen ? "120px" : "136px"
  const fourthItemTop = isDarkTheme && largeScreen ? "666px" : !isDarkTheme && largeScreen ? "666px" : isDarkTheme && !largeScreen ? "476px" : "466px"
  const fivethItemLeft = isDarkTheme && largeScreen ? "660px" : !isDarkTheme && largeScreen ? "680px" : isDarkTheme && !largeScreen ? "472px" : "480px"
  const fivethItemTop = isDarkTheme && largeScreen ? "666px" : !isDarkTheme && largeScreen ? "666px" : isDarkTheme && !largeScreen ? "478px" : "466px"
  const sixthItemLeft = isDarkTheme && largeScreen ? "1150px" : !isDarkTheme && largeScreen ? "1170px" : isDarkTheme && !largeScreen ? "830px" : "830px"
  const sixthItemTop = isDarkTheme && largeScreen ? "666px" : !isDarkTheme && largeScreen ? "666px" : isDarkTheme && !largeScreen ? "476px" : "466px"

  return (
    <div className={`${styles.workStagesWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.workStagesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ЭТАПЫ РАБОТЫ" mainTitle width={largeScreen ? "454px" : "264px"} left={largeScreen ? "26px" : "14px"} />
        </div>

        <div className={`${styles.stages}  ${isDarkTheme ? styles.dark : styles.light}`}>
          <WorkStage screenSize={screenSize}  isDarkTheme={isDarkTheme} left={firstItemLeft} top={largeScreen ? "50px" : "30px"} title={"БРИФИРОВАНИЕ. ОБСУЖДЕНИЕ"} text={"1. Обсуждение проекта на встрече или по телефону"} />
          <WorkStage screenSize={screenSize} isDarkTheme={isDarkTheme}
            left={secondItemLeft}
            top={secondItemTop}
            four
            title={"КРЕАТИВНАЯ СТРАТЕГИЯ"}
            text={"3.1 Анимационные видео: создание сценария и раскадровки. Согласовывание."}
            text2={"3.2 Видео на основе видеосъемки: создание сценария. Согласование. Подготовка к съемке."}

          />
          <WorkStage screenSize={screenSize} isDarkTheme={isDarkTheme} left={thirdItemLeft} top={largeScreen ? "50px" : "30px"} title={"КОРРЕКТИВЫ"} text={"5. Внесение корректив и создание финальной версии видео."} />
          <WorkStage  screenSize={screenSize} topArr isDarkTheme={isDarkTheme} left={fourthItemLeft} top={fourthItemTop} title={"ПРОЕКТИРОВАНИЕ ПРОЕКТА. ПОДГОТОВКА КП"} text={"2. Подготовка концепции и сметы. Согласование. Подписание договора."} />
          <WorkStage  screenSize={screenSize}topArr isDarkTheme={isDarkTheme}
            left={fivethItemLeft}
            top={fivethItemTop}
            title={"ПРОДАКШН"}
            text={
              "4.1 Создание моделей, анимация, текстурирование. озвучка. Согласование."
            }
            four
            text2={"4.2 видео на основе видеосъемки: проведение постановчной видеосъемки. Монтаж. Оформление 2d/3d графикой. Согласование."}
          />
          <WorkStage screenSize={screenSize} topArr isDarkTheme={isDarkTheme} left={sixthItemLeft} top={sixthItemTop} title={"ИТОГ"} text={"6. Сдача готового видеоролика. Подписание акта выполненных работ."} />
        </div>
      </div>
    </div>
  );
};

export default WorkStages;

<p>{"text \n text"}</p>