import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./mobile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { showNavSidebar } from "../../../../features/navSidebar";
import { showCategorySidebar } from "../../../../features/categorySidebar";
import { getFilterdProduct } from "../../../../features/searchSllice";
const MobileNav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className={styles.Nav_icons}>
      <button>
        <IoMdMenu onClick={() => dispatch(showNavSidebar())} />
      </button>

      <Link
        onClick={() => {
          dispatch(getFilterdProduct(""));
        }}
        to={"/allproduct"}
        className={styles.bag}
      >
        <IoEyeOutline />
      </Link>

      <button onClick={() => dispatch(showCategorySidebar())}>
        <AiOutlineAppstore />
      </button>

      <Link to={"/cart"} className={styles.bag}>
        <IoBagHandleOutline />
        <span> {cartItems.length || 0} </span>
      </Link>
    </div>
  );
};

export default MobileNav;
