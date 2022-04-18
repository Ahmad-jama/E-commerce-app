import React from "react";
import styles from "./modal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../../features/modalSlice";
const Modal = () => {
  const showModal = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(hideModal())}
        className={`${styles.overlay} ${showModal && styles.show_overlay}`}
      ></div>
      <div className={`${styles.modal} ${showModal && styles.show_modal}`}>
        <div className={styles.icon} onClick={() => dispatch(hideModal())}>
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
