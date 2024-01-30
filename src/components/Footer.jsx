import React, { useEffect, useState } from "react";
import styles from "../styles/Footer.module.scss";
import LogoBlack from "../svgs/footer-logo-black.svg";
import LogoLight from "../pngs/logo light.webp";
import { Link, animateScroll as scroll } from "react-scroll";
import CopyIcon from "../svgs/copy.svg";
import Telegram from "../svgs/telegram.svg";
import Whatsapp from "../pngs/whatsapp.webp";
import policy from "../docs/Pocily plan-big.space.pdf";
// import NextLink from "next/link";
import letter from "../pngs/let.svg"
import tel from "../pngs/tel.svg"
import point from "../pngs/point.svg"

const Footer = ({ isDarkTheme, setTab, screenSize }) => {
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
    <div className={`${styles.footerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      {screenSize > 720 ? (
        <div className={styles.footerContent}>
          <div className={styles.logo}>{isDarkTheme ? <img src={LogoBlack} /> : <img src={LogoLight} width={239} height={33} />}</div>
          <div className={styles.navigation}>
            <h4>Навигация</h4>
            <Link to="main" spy={true} smooth={true} offset={-50} duration={500}>
              Главная
            </Link>
            <Link to="onas" spy={true} smooth={true} offset={-50} duration={500}>
              О нас
            </Link>

            <Link to="services" spy={true} smooth={true} offset={-50} duration={500}>
              Услуги
            </Link>

            <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
              Портфолио
            </Link>

            <Link to="reasons" spy={true} smooth={true} offset={-50} duration={500}>
              Преимущества
            </Link>

            <Link to="feedback" spy={true} smooth={true} offset={-50} duration={500}>
              Отзывы
            </Link>
          </div>
          <div className={styles.services}>
            <h4>Услуги</h4>
            <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setTab(1)}>
              2D анимация
            </Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setTab(2)}>
              3D анимация
            </Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setTab(3)}>
              Рекламные ролики
            </Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setTab(4)}>
              Видеообзоры продукции
            </Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setTab(5)}>
              Cторителлинг видео
            </Link>
          </div>
          <div className={styles.contacts}>
            <h4>Контакты</h4>
            <div className={styles.phone}>
              <span>{phone}</span>
              <div className={styles.whats}>
                <a
                  href="https://api.whatsapp.com/send?phone=79660132196&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%BE%D1%81%D0%B5%D1%82%D0%B8%D0%BB(%D0%B0)%20%D0%92%D0%B0%D1%88%20%D1%81%D0%B0%D0%B9%D1%82%20plan-big.space%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Whatsapp} width={28} height={28} />
                </a>
              </div>
              <div className={styles.teleg}>
                <a href="https://t.me/Agency_Video" target="_blank" rel="noopener noreferrer">
                  <img src={Telegram} />
                </a>
              </div>
            </div>
            <div className={styles.email}>
              <span>{email}</span>
              <div
                className={styles.copy}
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
            <div className={styles.address}>
              Москва, Крутицкая <p>набережная, 1</p>
            </div>
            <div className={styles.policy}>
              <a href={policy} target="_blank" rel="noopener noreferrer">
                Политика конфиденциальности
              </a>
            </div>
            <div className={`${styles.actions} ${isDarkTheme ? styles.dark : styles.light}`}>
              <div>
                <Link to="order" spy={true} smooth={true} offset={-100} duration={500}>
                  <button>ОСТАВИТЬ ЗАЯВКУ</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.footerMobile}>
          <h4>КОНТАКТЫ</h4>
          <div className={styles.footerContactMobile}>
            <img src={tel}/>
            <a href={`tel:${phone}`} style={{textDecoration: "none", color: "white"}}>{phone}</a>
            <div
              className={styles.copy}
              onClick={() => {
                if (!isCopied) {
                  navigator.clipboard?.writeText(phone);
                  setIsPopoverOpen(true);
                  setIsPopoverHover(false);
                  setIsCopied(true);
                }
              }}
              // onMouseEnter={() => setIsPopoverHover(true)}
              // onMouseLeave={() => setIsPopoverHover(false)}
            >
              {/* {isPopoverOpen && <span style={{ left: "-30px" }}>Скопировано</span>} */}
              {/* {isCopied && isPopoverHover && <span style={{ left: "-30px" }}>Скопировано</span>} */}
              {/* {isPopoverHover && !isCopied && <span className={styles.hover}>Скопировать E-mail</span>} */}
              <img src={CopyIcon} />
            </div>
          </div>
          <div className={styles.footerContactMobile}>
            <img src={letter}/>
            <span>{email}</span>
            <div
              className={styles.copy}
              onClick={() => {
                if (!isCopied) {
                  navigator.clipboard?.writeText(email);
                  setIsPopoverOpen(true);
                  setIsPopoverHover(false);
                  setIsCopied(true);
                }
              }}
              // onMouseEnter={() => setIsPopoverHover(true)}
              // onMouseLeave={() => setIsPopoverHover(false)}
            >
              {/* {isPopoverOpen && <span style={{ left: "-30px" }}>Скопировано</span>} */}
              {/* {isCopied && isPopoverHover && <span style={{ left: "-30px" }}>Скопировано</span>} */}
              {/* {isPopoverHover && !isCopied && <span className={styles.hover}>Скопировать E-mail</span>} */}
              <img src={CopyIcon} />
            </div>
          </div>
          <div className={styles.footerContactMobile}><img src={point}/>Москва, Крутицкая набережная, 1</div>
          <a href={policy} target="_blank" rel="noopener noreferrer" className={styles.footerContactMobile} style={{textDecoration: "none"}}>
                Политика конфиденциальности
              </a>
          <div className={`${styles.actions} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div>
              <Link to="order" spy={true} smooth={true} offset={-100} duration={500}>
                <button>ОСТАВИТЬ ЗАЯВКУ</button>
              </Link>
            </div>
          </div>
          <div className={styles.messMobile}>
            <div className={styles.whats}>
              <a
                href="https://api.whatsapp.com/send?phone=79660132196&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%BE%D1%81%D0%B5%D1%82%D0%B8%D0%BB(%D0%B0)%20%D0%92%D0%B0%D1%88%20%D1%81%D0%B0%D0%B9%D1%82%20plan-big.space%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Whatsapp} width={18} height={18} />
              </a>
            </div>
            <div className={styles.teleg}>
              <a href="https://t.me/Agency_Video" target="_blank" rel="noopener noreferrer">
                <img src={Telegram} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
