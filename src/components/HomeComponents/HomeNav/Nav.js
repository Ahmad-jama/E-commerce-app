import styles from "./nav.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import DescktopNav from "./nav-desctop/Nav";
import MobileNav from "./nav-mobile/MobileNav";
import AsideNav from "./AsideNav/AsideNav";
import GlobalNav from "../../Nav/Nav";
const Nav = () => {
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
            <li>E-shop</li>
          </ul>
        </div>
      </nav>

      <GlobalNav />
      <DescktopNav />
      <AsideNav />
      <MobileNav />
    </div>
  );
};

export default Nav;
