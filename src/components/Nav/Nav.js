import React from "react";
import {
  IoBagHandleOutline,
  IoEyeOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilterdProduct } from "../../features/searchSllice";
const Nav = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handlekeyDown = (searchTerm) => {
    dispatch(getFilterdProduct(searchTerm));
    navigate("/allproduct");
  };

  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav}>
        <div className="container">
          <h1>
            <Link to={"/"}>E-Shope</Link>
          </h1>
          <div className={styles.search_bar}>
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlekeyDown(e.target.value);
                }
              }}
              type="text"
              placeholder="Enter your project name"
            />
            <button
              onClick={() => {
                handlekeyDown(search);
              }}
            >
              <IoSearchOutline />
            </button>
          </div>
          <ul>
            <Link to={"/cart"}>
              <IoBagHandleOutline />
              <span> {cartItems.length || 0} </span>
            </Link>
            <Link
              onClick={() => {
                dispatch(getFilterdProduct(search));
              }}
              to={"/allproduct"}
            >
              <IoEyeOutline />
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
