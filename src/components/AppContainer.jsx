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

const AppContainer = ({ isDarkTheme }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tab, setTab] = useState(6);
  const [screenSize, setScreenSize] = useState(null);

  const onCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
        <HeaderNavMenu isDarkTheme={isDarkTheme} setOpenModal={setOpenModal} />
        <Main isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <VideoMaking isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <Portfolio isDarkTheme={isDarkTheme} tab={tab} setTab={setTab} screenSize={screenSize} />
        {!isDarkTheme && <div className="light-underline"></div>}
        <Services isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <Consultation isDarkTheme={isDarkTheme} />
        <Reasons isDarkTheme={isDarkTheme} screenSize={screenSize}/>
        <WithUs isDarkTheme={isDarkTheme} screenSize={screenSize}/>
        {!isDarkTheme && <div className="light-underline"></div>}
        <Clients isDarkTheme={isDarkTheme} screenSize={screenSize}/>
        {!isDarkTheme && <div className="light-underline"></div>}
        <WorkStages isDarkTheme={isDarkTheme} screenSize={screenSize} />
        <Footer isDarkTheme={isDarkTheme} setTab={setTab}/>
        {openModal && <Modal onCloseModal={onCloseModal} />}
    </>
  );
};

export default AppContainer;
