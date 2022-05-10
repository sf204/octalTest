import React from "react";
import styles from "./Background.module.css";

export default function Background(props) {
  return <div className={styles.box}>{props.children}</div>;
}
