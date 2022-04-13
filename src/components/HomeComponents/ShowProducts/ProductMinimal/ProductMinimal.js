import React from "react";
import MInimalBox from "./MinimalBox/MInimalBox";
import styles from "./minimal.module.css";
const ProductMinimal = () => {
  return (
    <div className={styles.minimal}>
      <MInimalBox />
      <MInimalBox />
      <MInimalBox />
    </div>
  );
};

export default ProductMinimal;
