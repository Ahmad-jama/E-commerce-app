import React from "react";
import {
  IoBagHandleOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { useSelector } from "react-redux";
const Nav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav}>
        <div className="container">
          <h1>
            <Link to={"/"}>E-Shope</Link>
          </h1>
          <div className={styles.search_bar}>
            <input type="text" placeholder="Enter your project name" />
            <button>
              <IoSearchOutline />
            </button>
          </div>
          <ul>
            <Link to={"/cart"}>
              <IoBagHandleOutline />
              <span> {cartItems.length || 0} </span>
            </Link>
            <Link to={"/"}>
              <IoPersonOutline />
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
