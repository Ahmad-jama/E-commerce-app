import React from "react";
import { Link } from "react-router-dom";
import styles from "./banner.module.css";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_title}>
        <p>Tranding item</p>
        <h2>women's latest fashion sale</h2>
        <p>
          starting at $ <span>20</span>.00{" "}
        </p>
        <Link to={"/"}>shop now</Link>
      </div>
    </div>
  );
};

export default Banner;
