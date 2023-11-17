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
import { useNavigate } from 'react-router-dom';

const AppContainer = ({ isDarkTheme }) => {
  const navigateTo = useNavigate();


  const [openModal, setOpenModal] = useState(false);
  const [tab, setTab] = useState(6);
  const [screenSize, setScreenSize] = useState(null);
  const [openCaptcha, setOpenCaptcha] = useState(false);

  const onCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCaptchaChange = (value) => {
    try {
      setOpenCaptcha(false);
      // console.log("reCAPTCHA value:", value);
      navigateTo('/thx')

      
    } catch (error) {
      console.log("Error handling reCAPTCHA:", error);
      // Handle the error as needed
    }
  };

  return (
    <>
        <HeaderNavMenu isDarkTheme={isDarkTheme} setOpenModal={setOpenModal} />
        <Main isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <VideoMaking isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <Portfolio isDarkTheme={isDarkTheme} tab={tab} setTab={setTab} screenSize={screenSize} />
        {!isDarkTheme && <div className="light-underline"></div>}
        <Services isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <Consultation isDarkTheme={isDarkTheme} setOpenCaptcha={setOpenCaptcha}/>
        <Reasons isDarkTheme={isDarkTheme} screenSize={screenSize}/>
        <WithUs isDarkTheme={isDarkTheme} screenSize={screenSize}/>
        {!isDarkTheme && <div className="light-underline"></div>}
        <Clients isDarkTheme={isDarkTheme} screenSize={screenSize}/>
        {!isDarkTheme && <div className="light-underline"></div>}
        <WorkStages isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <Footer isDarkTheme={isDarkTheme} setTab={setTab}/>
        {openModal && <Modal onCloseModal={onCloseModal} />}
        {openCaptcha && <Recaptcha handleCaptchaChange={handleCaptchaChange} setOpenCaptcha={setOpenCaptcha}/>}

    </>
  );
};

export default AppContainer;
