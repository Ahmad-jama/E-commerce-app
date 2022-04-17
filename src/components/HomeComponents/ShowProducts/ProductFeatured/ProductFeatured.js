import React from "react";
import styles from "./featured.module.css";
import { AiOutlineStar } from "react-icons/ai";

const productFeatured = () => {
  return (
    <div className={styles.productbox}>
      <h2>Deal Of The Day</h2>
      <div className={styles.deal_box}>
        <div className={styles.image_container}>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg"
            alt="asdf"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.ratings}>
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
          </div>
          <h3> SHAMPOO, CONDITIONER & FACEWASH PACKS</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet consectetur Lorem ipsum dolo asdf as asdf asdf asasasdfr
          </p>
          <p className={styles.prices}>
            $150.00 <span> $180.00 </span>
          </p>
          <button>ADD TO CART</button>
          <div className={styles.count_sold}>
            <p>
              <span>already sold</span> :20
            </p>
            <p>
              <span>available</span>:20
            </p>
          </div>
          <div className={styles.progress}></div>
          <p>hurry up! offer ends in:</p>
          <div className={styles.days_left}>
            <div className={styles.box}>
              <p>360</p>
              <span>days</span>
            </div>
            <div className={styles.box}>
              <p>24</p>
              <span>Hours</span>
            </div>
            <div className={styles.box}>
              <p>59</p>
              <span>min</span>
            </div>
            <div className={styles.box}>
              <p>00</p>
              <span>sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productFeatured;
