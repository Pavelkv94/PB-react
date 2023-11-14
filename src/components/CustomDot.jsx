import styles from "../styles/CustomDot.module.scss";

const CustomDot = ({ isSelected, onClick, isDarkTheme }) => {
  return <div className={`${styles.customDot} ${isDarkTheme ? styles.dark : styles.light} ${isSelected ? styles.active : {}}`} onClick={onClick}>

  </div>;
};

export default CustomDot;
