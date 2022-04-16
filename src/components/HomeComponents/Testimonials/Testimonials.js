import React from "react";
import styles from "./testimonials.module.css";
import {
  IoBoatOutline,
  IoRocketOutline,
  IoCallOutline,
  IoArrowUndoOutline,
  IoTicketOutline,
} from "react-icons/io5";
const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonial_card}>
        <h2>Testimonial</h2>
        <div className={styles.testimonial_box}>
          <div className={styles.image_container}>
            <img
              src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/testimonial-1.jpg"
              alt=""
            />
          </div>
          <h4>ALAN DOE</h4>
          <p>CEO & Founder Invision</p>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/quotes.svg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet.
          </p>
        </div>
      </div>
      <div className={styles.cta_container}>
        <div>
          <button>25% DISCOUNT</button>

          <h3>Summer Collection</h3>
          <p>Starting @ $10</p>

          <span>SHOP NOW</span>
        </div>
      </div>

      <div className={styles.service}>
        <div className={styles.service_box}>
          <IoBoatOutline />
          <div>
            <p>Worldwide Delivery</p>
            <span>For Order Over $100</span>
          </div>
        </div>

        <div className={styles.service_box}>
          <IoRocketOutline />
          <div>
            <p>Next Day Delivery</p>
            <span>UK Orders Only</span>
          </div>
        </div>

        <div className={styles.service_box}>
          <IoCallOutline />
          <div>
            <p>Best Online Support</p>
            <span>Hours: 8AM - 11PM</span>
          </div>
        </div>
        <div className={styles.service_box}>
          <IoArrowUndoOutline />
          <div>
            <p>Return Policy</p>
            <span>Easy & Free Return</span>
          </div>
        </div>

        <div className={styles.service_box}>
          <IoTicketOutline />
          <div>
            <p>30% Money Back</p>
            <span>For Order Over $100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
