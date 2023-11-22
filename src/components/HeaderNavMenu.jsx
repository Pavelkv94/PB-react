import React, { useEffect, useState } from "react";
import styles from "../styles/HeaderNavMenu.module.scss";
import LogoBlack from "../svgs/logo-black-head.svg";
import LogoLight from "../svgs/logo-light-head.svg";
import Whatsapp from "../pngs/whatsapp.webp";
import Telegram from "../svgs/telegram.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import CopyIcon from "../svgs/copy.svg";

const HeaderNavMenu = ({ isDarkTheme, setOpenModal }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isPopoverHover, setIsPopoverHover] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const email = isDarkTheme ? "WELCOME@PLAN-BIG.SPACE" : "INFO@PLAN-BIG.SPACE";
  const phone = isDarkTheme ? "+7 (495) 128-60-30" : "+7 (495) 240-92-55";

  useEffect(() => {
    let timer = setTimeout(() => setIsPopoverOpen(false), 300);
    return () => clearTimeout(timer);
  }, [isPopoverOpen]);

  return (
    <div className={`${styles.headerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.content}>
        <div className={styles.logo}>{isDarkTheme ? <img src={LogoBlack} /> : <img src={LogoLight} />}</div>
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <nav>
              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light} ${styles.li}`} to="main" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={`${isDarkTheme ? styles.dark : styles.light} ${styles.li}`}>ГЛАВНАЯ</div>
              </Link>

              <Link activeClass={`${styles.active}  ${isDarkTheme ? styles.dark : styles.light}`} to="onas" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>О НАС</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>ПОРТФОЛИО </div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="services" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>УСЛУГИ</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="reasons" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>ПРЕИМУЩЕСТВА</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="feedback" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}> ОТЗЫВЫ</div>
              </Link>
            </nav>
          </div>
          <div className={`${styles.calculate} ${isDarkTheme ? styles.dark : styles.light}`} onClick={() => setOpenModal(true)}>
            <p>РАССЧИТАТЬ КП</p>
          </div>
          <div className={styles.contacts}>
            <p>{phone}</p>
            <div className={styles.mailWrapper}>
            <a href={`mailto:${email}`}>{email}</a>
            <div
            className={`${styles.copy} ${isDarkTheme ? styles.dark : styles.light}`}
            onClick={() => {
              if (!isCopied) {
                navigator.clipboard?.writeText(email);
                setIsPopoverOpen(true);
                setIsPopoverHover(false);
                setIsCopied(true);
              }
            }}
            onMouseEnter={() => setIsPopoverHover(true)}
            onMouseLeave={() => setIsPopoverHover(false)}
          >
            {isPopoverOpen && <span style={{ left: "-30px" }}>Скопировано</span>}
            {isCopied && isPopoverHover && <span style={{ left: "-30px" }}>Скопировано</span>}
            {isPopoverHover && !isCopied && <span className={styles.hover}>Скопировать E-mail</span>}
            <img src={CopyIcon} />
          </div>
            </div>
          </div>
         
        </div>
        <div className={styles.messengers}>
          <a
            href="https://api.whatsapp.com/send?phone=79660132196&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%BE%D1%81%D0%B5%D1%82%D0%B8%D0%BB(%D0%B0)%20%D0%92%D0%B0%D1%88%20%D1%81%D0%B0%D0%B9%D1%82%20plan-big.space%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Whatsapp} width={28} height={28} />
          </a>
          <a href="https://t.me/Agency_Video" target="_blank" style={{ marginLeft: "9px" }} rel="noreferrer">
            <img src={Telegram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavMenu;
