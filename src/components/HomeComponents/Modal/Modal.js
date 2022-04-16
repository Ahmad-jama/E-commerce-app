import React from "react";
import styles from "./modal.module.css";
import { IoCloseOutline } from "react-icons/io5";
const Modal = () => {
  return (
    <>
      {/* <div className={`${styles.overlay}  `}></div>
      <div className={`${styles.modal}  `}> */}
      <div className={`${styles.overlay} ${styles.show_overlay}`}></div>
      <div className={`${styles.modal} ${styles.show_modal}`}>
        <div className={styles.icon}>
          <IoCloseOutline />
        </div>
        <div className={styles.image_container}>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/newsletter.png"
            alt="modal"
          />
        </div>
        <div className={styles.content}>
          <h4> Subscribe Newsletter.</h4>
          <p>
            Subscribe the <span>template</span> to get latest products and
            discount update.
          </p>
          <input
            type="text"
            placeholder="Email Address
"
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
