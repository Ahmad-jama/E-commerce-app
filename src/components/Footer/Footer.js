import React from "react";
import styles from "./footer.module.css";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_category}>
        <div className="container">
          <h2>BRAND DIRECTORY</h2>
          <div className={styles.footer_box}>
            <p>FASHION : </p>
            <span> T-Shirt</span>
            <span>Shirts</span>
            <span>Shorts & Jeans</span>
            <span>Jacket</span>
            <span>Dress & Frock</span>
            <span>Innerwear</span>
            <span>Hosiery</span>
          </div>
          <div className={styles.footer_box}>
            <p>FOOTWEAR : </p>
            <span>Sport</span>
            <span>Formal</span>
            <span>Boots</span>
            <span>Casual</span>
            <span>Cowboy Shoes</span>
            <span>Safety Shoes</span>
            <span>Party Wear Shoes</span>
            <span>Branded</span>
            <span>Firstcopy</span>
            <span>Long Shoes</span>
          </div>
          <div className={styles.footer_box}>
            <p>JEWELLERY : </p>
            <span>Necklace</span>
            <span>Earrings</span>
            <span>Couple Rings</span>
            <span>Pendants</span>
            <span>Crystal</span>
            <span>Bangles</span>
            <span>Bracelets</span>
            <span> Nosepin Chain</span>
            <span>Earrings</span>
          </div>
          <div className={styles.footer_box}>
            <p> COSMETICS :</p>
            <span>Shampoo</span>
            <span>Bodywash</span>
            <span>Facewash</span>
            <span>Makeup Kit</span>
            <span>Liner </span>
            <span>Lipstick</span>
            <span>Prefume</span>
            <span>Hair</span>
            <span> Colors Hair</span>
          </div>
        </div>
      </div>
      <div className={styles.footer_nav}>
        <div className="container">
          <div className={styles.list}>
            <h4>POPULAR CATEGORIES</h4>
            <span>Fashion</span>
            <span>Electronic</span>
            <span>Cosmetic</span>
            <span>Health</span>
            <span>Watches</span>
          </div>
          <div className={styles.list}>
            <h4>PRODUCTS</h4>
            <span>Prices Drop</span>
            <span>New Products</span>
            <span>Best Sales</span>
            <span>Best Sales</span>
            <span>Sitemap</span>
          </div>
          <div className={styles.list}>
            <h4>OUR COMPANY</h4>
            <span>Delivery</span>
            <span>Legal Notice</span>
            <span>Terms And Conditions</span>
            <span>About Us</span>
            <span>Secure Payment</span>
          </div>
          <div className={styles.list}>
            <h4>SERVICES</h4>
            <span>Prices Drop</span>
            <span>New Products</span>
            <span>Best Sales</span>
            <span>Best Sales</span>
            <span>Sitemap</span>
          </div>
          <div className={styles.list}>
            <h4>SERVICES</h4>
            <div>
              <div>
                <IoLocationOutline />
              </div>{" "}
              <span>
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </span>
            </div>
            <div>
              <div>
                <IoCallOutline />
              </div>{" "}
              <span>(607) 936-8058</span>
            </div>
            <div>
              <div>
                <IoMailOutline />
              </div>{" "}
              <span>Example@Gmail.Com</span>
            </div>
          </div>
        </div>
      </div>
      <p>Copyright © Ahmad jama All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
