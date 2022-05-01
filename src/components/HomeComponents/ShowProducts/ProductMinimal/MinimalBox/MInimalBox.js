import React from "react";
import { Link } from "react-router-dom";
import styles from "./box.module.css";
const MInimalBox = ({ title, productsData }) => {
  return (
    <div className={styles.box_showcase}>
      <h2>{title}</h2>
      {productsData.map((product) => {
        const { id, title, category, oldPrice, newPrice, imageOne } = product;

        return (
          <div key={id}>
            <Link to={`/product/${id}`} className={styles.box}>
              <div>
                <img src={imageOne} alt={title} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{category}</p>
                <p>
                  {oldPrice} <span>{newPrice}</span>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MInimalBox;
