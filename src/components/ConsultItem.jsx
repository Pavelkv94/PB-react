import React, { useState } from "react";
import styles from "../styles/ConsultItem.module.scss";

const ConsultItem = ({text, onClick, checked}) => {
  return (
    <div className={styles.consultItem} onClick={onClick}>
        <p>{text}</p>
        <div className={`${styles.check} ${checked ? styles.checked : {}}`}>

        </div>
    </div>
  );
};

export default ConsultItem;
