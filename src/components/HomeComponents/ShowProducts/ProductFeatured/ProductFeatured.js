import React from "react";
import styles from "./featured.module.css";
import SingleProduct from "../../../../pages/SingleProductPage/SingleProductPage";

const ProductFeatured = () => {
  return (
    <div className={styles.productbox}>
      <h2>Deal Of The Day</h2>
      <div className={styles.product_container}>
        <SingleProduct />
      </div>{" "}
    </div>
  );
};

export default ProductFeatured;
