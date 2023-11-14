import React, { useState } from "react";
import styles from "../styles/Client.module.scss";

const Client = ({ isDarkTheme, img}) => {
  return (
    <div className={`${styles.clientWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <img alt="client logo" src={img}/>
    </div>
  );
};

export default Client;
