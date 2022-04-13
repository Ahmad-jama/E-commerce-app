import React from "react";
import { Link } from "react-router-dom";
import styles from "./box.module.css";
const MInimalBox = () => {
  return (
    <div className={styles.box_showcase}>
      <h2>new arival</h2>
      <Link to={"/"} className={styles.box}>
        <div>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg"
            alt=""
          />
        </div>
        <div>
          <h3>Girls Pnk Embro Design Top</h3>
          <p>Clothes</p>
          <p>
            $61.00 <span> $9.00</span>
          </p>
        </div>
      </Link>
      <Link to={"/"} className={styles.box}>
        <div>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg"
            alt=""
          />
        </div>
        <div>
          <h3>Girls Pnk Embro Design Top</h3>
          <p>Clothes</p>
          <p>
            $61.00 <span> $9.00</span>
          </p>
        </div>
      </Link>
      <Link to={"/"} className={styles.box}>
        <div>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg"
            alt=""
          />
        </div>
        <div>
          <h3>Girls Pnk Embro Design Top</h3>
          <p>Clothes</p>
          <p>
            $61.00 <span> $9.00</span>
          </p>
        </div>
      </Link>
      <Link to={"/"} className={styles.box}>
        <div>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg"
            alt=""
          />
        </div>
        <div>
          <h3>Girls Pnk Embro Design Top</h3>
          <p>Clothes</p>
          <p>
            $61.00 <span> $9.00</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MInimalBox;
