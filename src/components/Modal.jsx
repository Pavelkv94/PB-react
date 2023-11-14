import { useState } from "react";
import styles from "../styles/Modal.module.scss";
import Checked from "../svgs/checked.svg";
import UnChecked from "../svgs/checked-no.svg";

const Modal = ({ onCloseModal }) => {
  const initAnswers = {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    contacts: {
        name: "",
        phone: "",
        site: "",
        url: ""
    }
  };
  const [state, setState] = useState(0);
  const [answers, setAnswers] = useState(initAnswers);

  const closeModal = () => {
    onCloseModal();
    setState(0);
    setAnswers(initAnswers);
  };
  const modalContentData = [
    {
      question: "1. О чём вы хотите рассказать при помощи видео?",
      variants: ["О товаре", "Об услуге", "О компании", "О бизнесе", "Другое"],
      type: "question",
      id: "q1",
    },
    {
      question: "2. Какая продолжительность длительности ролика?",
      variants: ["Менее 1 минуты", "1-2 минуты", "2-3 минуты", "Более 3-х минут", "Пока не знаю"],
      type: "question",
      id: "q2",
    },
    {
      question: "3. Какой тип ролика Вам больше всего подходит?",
      variants: ["2D Анимация", "3D Анимация", "Презентационное видео / Корпоративный фильм", "Рекламный ролик", "Не знаю. Мне нужно посоветовать, что лучше подойдёт"],
      type: "question",
      id: "q3",
    },
    {
      question: "4. Когда нужен готовый ролик?",
      variants: ["Срочно. Через 2 недели", "Через 3-4 недели", "Через 5-7 недель", "Через 2 месяца или более", "Другое"],
      type: "question",
      id: "q4",
    },
    {
      question: "5. Контактная информация",
      variants: ["О товаре", "Об услуге", "О компании", "О бизнесе", "Другое"],
      type: "send",
    },
  ];

  const modalContent = (data) => (
    <div className={styles.modalContent}>
      <p>{data.question}</p>
      {data.type === "question" ? <div className={styles.varsWrapper}>
        {data.variants.map((el, index) => (
          <div key={index} className={styles.varWrap}>
            <div className={styles.check} onClick={() => setAnswers({ ...answers, [data.id]: el })}>
              {el === answers[data.id] ? <img src={Checked} /> : <img src={UnChecked} />}
            </div>
            <label>{el}</label>
          </div>
        ))}
      </div> : <div className={styles.form}>
        <input placeholder="Ваше имя" value={answers.contacts.name} onChange={e => setAnswers({...answers, contacts: {...answers.contacts, name: e.target.value}})}/>
        <input placeholder="Ваш телефон" value={answers.contacts.phone} onChange={e => setAnswers({...answers, contacts: {...answers.contacts, phone: e.target.value}})}/>
        <input placeholder="Адрес сайта вашей компании" value={answers.contacts.site} onChange={e => setAnswers({...answers, contacts: {...answers.contacts, site: e.target.value}})}/>
        <input placeholder="Ссылка на пример видео" value={answers.contacts.url} onChange={e => setAnswers({...answers, contacts: {...answers.contacts, url: e.target.value}})}/>

        </div>}
      <div className={`${styles.btn} ${answers[data.id] === "" ? styles.disabled : styles.active}`} onClick={() => state === 4 ? closeModal() : answers[data.id] === "" ? {} : setState((prev) => prev + 1)}>
        <span>{state === 4 ? "ОТПРАВИТЬ" : "СЛЕДУЮЩИЙ ШАГ"}</span>
      </div>
    </div>
  );

  return (
    <div className={styles.modalWrapper} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Мы детально погружаемся в каждый проект клиента. </h2>
        <h2>
          Пройдите тест за <b>1 минуту</b> и рассчитайте стоимость проекта.
        </h2>
        {modalContent(modalContentData[state])}
      </div>
    </div>
  );
};

export default Modal;
