import { useEffect, useState } from "react";
import styles from "../styles/Consultation.module.scss";
import ConsultItem from "./ConsultItem";
import compliance from "../docs/compliance plan-big.space.pdf";

const Consultation = ({ isDarkTheme, setOpenCaptcha, consultationData, setConsultationData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const consultItems = [
    { text: "Имидж и PR", key: 1, checked: false },
    { text: "Повышение продаж", key: 2, checked: false },
    { text: "Обучение", key: 3, checked: false },
    { text: "Рекламная кампания", key: 4, checked: false },
    { text: "Переговоры", key: 5, checked: false },
    { text: "Презентация товаров и услуг", key: 6, checked: false },
  ];

  const [items, setItems] = useState(consultItems);

  useEffect(() => {
    setConsultationData({
      ...consultationData,
      "Имидж и PR": items[0].checked ? "Да" : "Нет",
      "Повышение продаж": items[1].checked ? "Да" : "Нет",
      "Обучение": items[2].checked ? "Да" : "Нет",
      "Рекламная кампания": items[3].checked ? "Да" : "Нет",
      "Переговоры": items[4].checked ? "Да" : "Нет",
      "Презентация товаров и услуг": items[5].checked ? "Да" : "Нет",
    });
  }, [items]);

  useEffect(() => {
    setConsultationData({ ...consultationData, ["Номер телефона"]: phoneNumber });
  }, [phoneNumber]);

  const handleInputChange = (e) => {
    let input = e.target.value;

    // Allow backspace
    if ((e.nativeEvent.inputType === "deleteContentBackward" && phoneNumber !== "+7") || (e.nativeEvent.inputType === "deleteContentForward" && phoneNumber !== "+7")) {
      setPhoneNumber(input);
      return;
    }

    input = input.replace(/\D/g, "").substring(0, 11);

    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
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
    phoneNumber === "" && setPhoneNumber("+7");
  };

  const onBlurPhone = () => {
    phoneNumber === "+7" && setPhoneNumber("");
  };

  const [validName, setValidName] = useState(true);
  const [validTel, setValidTel] = useState(true);

  const handleSubmit = () => {
    if(consultationData["Номер телефона"] === "") {setValidTel(false)}
    if(consultationData["Имя"].trim() === "") {setValidName(false)}
    if(consultationData["Имя"].trim() !== "" && consultationData["Номер телефона"] !== "") {setOpenCaptcha(true)}
  };

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
              <input
                className={validName ? "" : "notValid"}
                placeholder="Ваше имя"
                name="name"
                value={consultationData["Имя"]}
                onChange={(e) => setConsultationData({ ...consultationData, ["Имя"]: e.target.value })}
              />
            </div>
            <div className={styles.sendMailItem}>
              <label>Номер телефона</label>
              <input
                className={validTel ? "" : "notValid"}
                placeholder="+7 (999) 999-99-99"
                type="tel"
                value={phoneNumber}
                onChange={handleInputChange}
                onFocus={onFocusPhone}
                onBlur={onBlurPhone}
                name="tel"
              />
            </div>
            <div className={styles.sendMailItem}>
              <button className={`${isDarkTheme ? styles.dark : styles.light}`} onClick={handleSubmit}>
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </div>
          </div>
          <div className={styles.policy}>
            <p>
              Нажимая кнопку «Оставить заявку», вы подтверждаете свое согласие на{" "}
              <a href={compliance} target="_blank" rel="noopener noreferrer">
                обработку пользовательских данных
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Consultation;
