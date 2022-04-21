import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  incressQuantity,
  decressQuantity,
  getTotal,
} from "../../features/cart";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);
  if (cart.cartItems == false) {
    return (
      <>
        <Nav />

        <h1
          style={{
            height: "90vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          the cart is empty
        </h1>
      </>
    );
  }

  return (
    <div>
      <Nav />
      <div className="container">
        <div className={styles.cart}>
          <div className={styles.cart_title}>
            <p>Product</p>
            <p>Quantity</p>
            <p>Total Price</p>
          </div>
          {cart.cartItems.map((product) => {
            const { id, imageOne, newPrice, title, quantity } = product;
            return (
              <div key={id} className={styles.cart_items}>
                <div className={styles.content}>
                  <img src={imageOne} alt={title} />

                  <div>
                    <h3>{title}</h3>
                    <p>Price : {newPrice}$</p>
                    <button onClick={() => dispatch(removeFromCart(product))}>
                      remove
                    </button>
                  </div>
                </div>
                <div className={styles.quantity}>
                  <button
                    onClick={() => {
                      dispatch(incressQuantity(product));
                    }}
                  >
                    <AiOutlineArrowLeft />
                  </button>{" "}
                  <p>{quantity}</p>{" "}
                  <button
                    onClick={() => {
                      dispatch(decressQuantity(product));
                    }}
                  >
                    <AiOutlineArrowRight />
                  </button>{" "}
                </div>
                <div>${newPrice * quantity} </div>
              </div>
            );
          })}

          <div className={styles.total}>
            <div>
              <p>Suptotoal</p>
              <p>${cart.totalAmount}.00</p>
            </div>
            <div>
              <p>Tax</p>
              <p>$30.00</p>
            </div>
            <div>
              <p>Total</p>
              <p>${cart.totalAmount + 30}.00</p>
            </div>

            <Link to={"/checkout"}>Proceed to checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
