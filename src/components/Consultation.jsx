import React, { useState } from "react";
import styles from "../styles/Consultation.module.scss";
import ConsultItem from "./ConsultItem";
import { Link } from "react-router-dom";
import compliance from "../docs/compliance plan-big.space.pdf";

const Consultation = ({ isDarkTheme }) => {
  const consultItems = [
    { text: "Имидж и PR", key: 1, checked: false },
    { text: "Повышение продаж", key: 2, checked: false },
    { text: "Обучение", key: 3, checked: false },
    { text: "Рекламная кампания", key: 4, checked: false },
    { text: "Переговоры", key: 5, checked: false },
    { text: "Презентация товаров и услуг", key: 6, checked: false },
  ];

  const [items, setItems] = useState(consultItems);

  return (
    <div className={`${styles.consultationWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="order">
      <div className={styles.consultationContent}>
        <h2>ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</h2>
        <h3>ЗАПОЛНИТЕ КОРОТКУЮ ФОРМУ НИЖЕ И МЫ ВАМ ПЕРЕЗВОНИМ</h3>

        <section>
          <div className={styles.subtitle}>
            <h4>Какую задачу вы решаете?</h4>
            <p>Выберите одну или более задачу</p>
          </div>
          <div className={styles.tasks}>
            {items.map((el) => (
              <ConsultItem
                text={el.text}
                key={el.key}
                onClick={() => setItems(items.map((item) => (item.key === el.key ? { ...item, checked: !item.checked } : item)))}
                checked={el.checked}
              />
            ))}
          </div>
          <div className={styles.sendMail}>
            <div className={styles.sendMailItem}>
              <label>Имя</label>
              <input placeholder="Ваше имя"/>
            </div>
            <div className={styles.sendMailItem}>
              <label>Номер телефона</label>
              <input placeholder="+7 (999) 999-99-99" type="phone"/>
            </div>
            <div className={styles.sendMailItem}>
              <a href={isDarkTheme ? "tnx" : "wtnx"}><button className={`${isDarkTheme ? styles.dark : styles.light}`}>ОСТАВИТЬ ЗАЯВКУ</button></a>
            </div>
          </div>
          <div className={styles.policy}>
            <p> Нажимая кнопку «Оставить заявку», вы подтверждаете свое согласие на <a href={compliance} target="_blank" rel="noopener noreferrer">обработку пользовательских данных</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Consultation;
