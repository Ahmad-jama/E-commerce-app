import React from "react";
import Nav from "../../components/Nav/Nav";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/cart";
const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  if (products == false) {
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
          {products.map((product) => {
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
                <div> {quantity} </div>
                <div>$494</div>
              </div>
            );
          })}

          {/* <div className={styles.cart_items}>
            <div className={styles.content}>
              <div>
                <img
                  src="https://s3.envato.com/files/182066829/icon.png  "
                  alt=""
                />
              </div>
              <div>
                <h3>red prowd shirt-1</h3>
                <p>Price : 299$</p>
                <button>remove</button>
              </div>
            </div>
            <div>1</div>
            <div>$494</div>
          </div>
          <div className={styles.cart_items}>
            <div className={styles.content}>
              <div>
                <img
                  src="https://s3.envato.com/files/182066829/icon.png  "
                  alt=""
                />
              </div>
              <div>
                <h3>red prowd shirt-1</h3>
                <p>Price : 299$</p>
                <button>remove</button>
              </div>
            </div>
            <div>1</div>
            <div>$494</div>
          </div>
          <div className={styles.cart_items}>
            <div className={styles.content}>
              <div>
                <img
                  src="https://s3.envato.com/files/182066829/icon.png  "
                  alt=""
                />
              </div>
              <div>
                <h3>red prowd shirt-1</h3>
                <p>Price : 299$</p>
                <button>remove</button>
              </div>
            </div>
            <div>1</div>
            <div>$494</div>
          </div> */}

          <div className={styles.total}>
            <div>
              <p>Suptotoal</p>
              <p>$303.00</p>
            </div>
            <div>
              <p>Tax</p>
              <p>$30.00</p>
            </div>
            <div>
              <p>Total</p>
              <p>$333.00</p>
            </div>

            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <div className={styles.content}>
<div>
  <img
    src="https://s3.envato.com/files/182066829/icon.png  "
    alt=""
  />
</div>
<div>
  <h3>red prowd shirt-1</h3>
  <p>Price : 299$</p>
  <button>remove</button>
</div>
</div> */
}
