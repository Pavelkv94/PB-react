import { useEffect, useState } from "react";
import Clients from "./Clients";
import Consultation from "./Consultation";
import Footer from "./Footer";
import HeaderNavMenu from "./HeaderNavMenu";
import Main from "./Main";
import Portfolio from "./Portfolio";
import Reasons from "./Reasons";
import Services from "./Services";
import VideoMaking from "./VideoMaking";
import WithUs from "./WithUs";
import WorkStages from "./WorkStages";
import Modal from "./Modal";
import Recaptcha from "./recaptcha";
import { sendMail } from "./sendMail";

const AppContainer = ({ isDarkTheme }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tab, setTab] = useState(6);
  // Do whatever you want with the tokenuseState(6);
  const [screenSize, setScreenSize] = useState(null);
  const [openCaptcha, setOpenCaptcha] = useState(false);

  const initConsultationItems = {
    "ЗАЯВКА/КОНСУЛЬТАЦИЯ": "",
    "Имя": "",
    "Номер телефона": "",
    "Задачи которые нужно решить":"",
    "Имидж и PR": "Нет",
    "Повышение продаж": "Нет",
    "Обучение": "Нет",
    "Рекламная кампания": "Нет",
    "Переговоры": "Нет",
    "Презентация товаров и услуг": "Нет"
  };

  const [consultationData, setConsultationData] = useState(initConsultationItems);

  const mailToken = isDarkTheme ? "xrgwwzlg" : "mbjvvrkl";
  // const mailToken = "mwkddele";
  const onCloseModal = () => {
    setOpenModal(false);
    };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCaptchaChange = (value) => {
    try {
      setOpenCaptcha(false);
      sendMail(consultationData, mailToken);
    } catch (error) {
      console.log("Error handling reCAPTCHA:", error);
    }
  };

  return (
    <>
      <HeaderNavMenu isDarkTheme={isDarkTheme} setOpenModal={setOpenModal} screenSize={screenSize}/>
      <Main isDarkTheme={isDarkTheme} screenSize={screenSize} />
      <VideoMaking isDarkTheme={isDarkTheme} screenSize={screenSize} />
      {/* <Portfolio isDarkTheme={isDarkTheme} tab={tab} setTab={setTab} screenSize={screenSize} />
      {!isDarkTheme && <div className="light-underline"></div>}
      <Services isDarkTheme={isDarkTheme} screenSize={screenSize} /> */}
      <Consultation isDarkTheme={isDarkTheme} setOpenCaptcha={setOpenCaptcha} consultationData={consultationData} setConsultationData={setConsultationData} screenSize={screenSize}/>
      {/* <Reasons isDarkTheme={isDarkTheme} screenSize={screenSize} /> */}
      <WithUs isDarkTheme={isDarkTheme} screenSize={screenSize} />
      {!isDarkTheme && screenSize > 720 && <div className="light-underline"></div>}
      <Clients isDarkTheme={isDarkTheme} screenSize={screenSize} />
      {!isDarkTheme && <div className="light-underline"></div>}
      <WorkStages isDarkTheme={isDarkTheme} screenSize={screenSize} />
      <Footer isDarkTheme={isDarkTheme} setTab={setTab} screenSize={screenSize}/>
      {openModal && <Modal onCloseModal={onCloseModal} mailToken={mailToken}/>}
      {openCaptcha && <Recaptcha handleCaptchaChange={handleCaptchaChange} setOpenCaptcha={setOpenCaptcha} />}
    </>
  );
};

export default AppContainer;
