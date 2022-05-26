import React from "react";
import styles from "./checkout.module.css";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import { toast } from "react-toastify";

const Checkout = () => {
  const products = useSelector((store) => store.cart);
  return (
    <>
      <Nav />
      <div className={styles.checkout}>
        <div className="container">
          <div className={styles.left}>
            <h2>BILLING DETAILS</h2>
            <form className={styles.first_form}>
              <div className={styles.cover}>
                <div className={styles.input}>
                  <label htmlFor="name">First Name</label>
                  <input type="text" id="name" />
                </div>
                <div className={styles.input}>
                  <label htmlFor="name">Last Name</label>
                  <input type="text" id="name" />
                </div>
              </div>

              <div className={styles.input}>
                <label htmlFor="name"> Country</label>
                <input type="text" id="name" />
              </div>
              <div className={styles.input}>
                <label htmlFor="name">Address </label>
                <input type="text" id="name" />
              </div>
              <div className={styles.input}>
                <label htmlFor="name">Town/City </label>
                <input type="text" id="name" />
              </div>
              <div className={styles.input}>
                <label htmlFor="name">Country/State </label>
                <input type="text" id="name" />
              </div>
              <div className={styles.input}>
                <label htmlFor="name"> Postcode / ZIP</label>
                <input type="text" id="name" />
              </div>
              <div className={styles.cover}>
                <div className={styles.input}>
                  <label htmlFor="name">Phone</label>
                  <input type="text" id="name" />
                </div>
                <div className={styles.input}>
                  <label htmlFor="name">Email</label>
                  <input type="text" id="name" />
                </div>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <h2>YOUR ORDER</h2>

            <ul className={styles.checkout_orders}>
              <li>
                <p>product</p>
                <p>total</p>
              </li>
              {products.cartItems.map((item) => {
                const { newPrice, quantity, title, id } = item;
                return (
                  <li className={styles.items} key={id}>
                    <p>{title}</p>
                    <p>${newPrice * quantity}.00</p>
                  </li>
                );
              })}
            </ul>
            <ul className={styles.checkout_orders}>
              <li className={styles.items}>
                <p> Subtotal</p>
                <p> ${products.totalAmount}.00 </p>
              </li>
              <li className={styles.items}>
                <p>Tax</p>
                <p>$30.00</p>
              </li>

              <li className={styles.items}>
                <p>Total</p>
                <p>${products.totalAmount + 30}.00 </p>
              </li>
            </ul>
            <button
              onClick={() =>
                toast(`  Thanks for ordring `, {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "dark",
                  progress: undefined,
                })
              }
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
