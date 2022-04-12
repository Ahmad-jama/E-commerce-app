import { useState } from "react";
import styles from "./nav.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  IoBagHandleOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import DescktopNav from "./nav-desctop/Nav";
import MobileNav from "./nav-mobile/MobileNav";
import AsideNav from "./AsideNav/AsideNav";
const Nav = () => {
  const [showAside, setShowAside] = useState(false);
  console.log(showAside);
  return (
    <div className={styles.nav_container}>
      <nav className={styles.top_nav}>
        <div className="container">
          <ul className={styles.icons}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </ul>

          <ul>
            <li>FREE SHIPPING THIS WEEK ORDER OVER - $55</li>
          </ul>

          <ul>
            <li>night</li>
          </ul>
        </div>
      </nav>
      <nav className={styles.middle_nav}>
        <div className="container">
          <h1>E-Shope</h1>
          <div className={styles.search_bar}>
            <input type="text" placeholder="Enter your project name" />
            <button>
              <IoSearchOutline />
            </button>
          </div>
          <ul>
            <Link to={"/"}>
              <IoBagHandleOutline />
            </Link>
            <Link to={"/"}>
              <IoPersonOutline />
            </Link>
          </ul>
        </div>
      </nav>
      <DescktopNav />
      <AsideNav showAside={showAside} setShowAside={setShowAside} />
      <MobileNav setShowAside={setShowAside} />
    </div>
  );
};

export default Nav;
