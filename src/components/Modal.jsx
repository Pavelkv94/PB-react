import { useEffect, useState } from "react";
import styles from "../styles/Modal.module.scss";
import Checked from "../svgs/checked.svg";
import UnChecked from "../svgs/checked-no.svg";
import { sendMail } from "./sendMail";

const Modal = ({ onCloseModal, mailToken }) => {
  const initAnswers = {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    contacts: {
      name: "",
      phone: "",
      site: "",
      url: "",
    },
  };
  const [state, setState] = useState(0);
  const [answers, setAnswers] = useState(initAnswers);

  const initQuizData = {
    "ЗАЯВКА/РАССЧИТАТЬ КП": "",
    "1. О чём вы хотите рассказать при помощи видео?": "",
    "2. Какая продолжительность длительности ролика?": "",
    "3. Какой тип ролика Вам больше всего подходит?": "",
    "4. Когда нужен готовый ролик?": "",
    "5. Контактная информация": "",
    "Имя": "",
    "Номер телефона": "",
    "Адрес сайта компании": "",
    "Ссылка на пример видео": "",
  };

  const [quizData, setQuizData] = useState(initQuizData);

  useEffect(() => {
    setQuizData({
      ...quizData,
      "Имя": answers.contacts.name,
      "Номер телефона": answers.contacts.phone,
      "Адрес сайта компании": answers.contacts.site,
      "Ссылка на пример видео": answers.contacts.url,
      "1. О чём вы хотите рассказать при помощи видео?": answers.q1,
      "2. Какая продолжительность длительности ролика?": answers.q2,
      "3. Какой тип ролика Вам больше всего подходит?": answers.q3,
      "4. Когда нужен готовый ролик?": answers.q4,
    });
  }, [answers]);

  const closeModal =  () => {
    setState(0);
    setAnswers(initAnswers);
    onCloseModal();
  };

  const [validName, setValidName] = useState(true);
  const [validTel, setValidTel] = useState(true);

  const handleSend = async () => {
    if(quizData["Номер телефона"] === "") {setValidTel(false)}
    if(quizData["Имя"].trim() === "") {setValidName(false)}
    if(quizData["Имя"].trim() !== "" && quizData["Номер телефона"] !== "") {   
    await sendMail(quizData, mailToken)
    closeModal()}
  }

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

  const handleInputChange = (e) => {
    let input = e.target.value;

    // Allow backspace
    if (
      (e.nativeEvent.inputType === "deleteContentBackward" && answers.contacts.phone !== "+7") ||
      (e.nativeEvent.inputType === "deleteContentForward" && answers.contacts.phone !== "+7")
    ) {
      setAnswers({ ...answers, contacts: { ...answers.contacts, phone: input } });
      return;
    }

    input = input.replace(/\D/g, "").substring(0, 11);

    const formattedNumber = formatPhoneNumber(input);
    setAnswers({ ...answers, contacts: { ...answers.contacts, phone: formattedNumber } });
  };

  const formatPhoneNumber = (input) => {
    let formattedNumber = "+7";
    if (input.length >= 1) {
      formattedNumber += `(${input.substring(0, 4)})`;
      formattedNumber;
    }

    if (input.length >= 4) {
      formattedNumber += `-${input.substring(4, 7)}`;
    }

    if (input.length >= 7) {
      formattedNumber += `-${input.substring(7, 9)}`;
    }

    if (input.length >= 9) {
      formattedNumber += `-${input.substring(9)}`;
    }

    return formattedNumber.slice(0, 3) + formattedNumber.slice(4);
  };

  const onFocusPhone = () => {
    answers.contacts.phone === "" && setAnswers({ ...answers, contacts: { ...answers.contacts, phone: "+7" } });
  };

  const onBlurPhone = () => {
    answers.contacts.phone === "+7" && setAnswers({ ...answers, contacts: { ...answers.contacts, phone: "" } });
  };

  const modalContent = (data) => (
    <div className={styles.modalContent}>
      <p>{data.question}</p>
      {data.type === "question" ? (
        <div className={styles.varsWrapper}>
          {data.variants.map((el, index) => (
            <div key={index} className={styles.varWrap}>
              <div className={styles.check} onClick={() => setAnswers({ ...answers, [data.id]: el })}>
                {el === answers[data.id] ? <img src={Checked} /> : <img src={UnChecked} />}
              </div>
              <label>{el}</label>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.form}>
          <input 
            placeholder="Ваше имя"                 
            className={validName ? "" : "notValid"}
            value={answers.contacts.name} 
            onChange={(e) => setAnswers({ ...answers, contacts: { ...answers.contacts, name: e.target.value } })} />
          <input 
            placeholder="Ваш телефон"                 
            className={validTel ? "" : "notValid"}
            value={answers.contacts.phone} 
            onChange={handleInputChange} onFocus={onFocusPhone} onBlur={onBlurPhone} />
          <input
            placeholder="Адрес сайта вашей компании"
            value={answers.contacts.site}
            onChange={(e) => setAnswers({ ...answers, contacts: { ...answers.contacts, site: e.target.value } })}
          />
          <input
            placeholder="Ссылка на пример видео"
            value={answers.contacts.url}
            onChange={(e) => setAnswers({ ...answers, contacts: { ...answers.contacts, url: e.target.value } })}
          />
        </div>
      )}
      <div
        className={`${styles.btn} ${answers[data.id] === "" ? styles.disabled : styles.active}`}
        onClick={() => (state === 4 ? handleSend() : answers[data.id] === "" ? {} : setState((prev) => prev + 1))}
      >
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
