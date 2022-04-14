import React from "react";
import { Link } from "react-router-dom";
import styles from "./box.module.css";
const MInimalBox = ({ title, productsData }) => {
  return (
    <div className={styles.box_showcase}>
      <h2>{title}</h2>
      {productsData.map((product) => {
        const { id, name, category, oldPrice, newPrice, image } = product;

        return (
          <div key={id}>
            <Link to={"/"} className={styles.box}>
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <h3>{name}</h3>
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
