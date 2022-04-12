import React from "react";
import styles from "./nav.module.css";
const DescktopNav = () => {
  return (
    <nav className={styles.last_nav}>
      <div className="container">
        <ul>
          <li>
            <span>home</span>
          </li>
          <li className={styles.drop_menu}>
            <span>categories</span>
            <div className="container">
              <ul>
                <h3>electronics</h3>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
                <li>five</li>
                <li>
                  <img
                    src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-1.jpg"
                    alt=""
                  />
                </li>
              </ul>
              <ul>
                <h3>man's</h3>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
                <li>five</li>
                <li>
                  <img
                    src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/mens-banner.jpg"
                    alt=""
                  />
                </li>
              </ul>
              <ul>
                <h3>women's</h3>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
                <li>five</li>
                <li>
                  <img
                    src="
                  https://codewithsadee.github.io/anon-ecommerce-website/assets/images/womens-banner.jpg"
                    alt=""
                  />
                </li>
              </ul>
              <ul>
                <h3>electronics</h3>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
                <li>five</li>
                <li>
                  <img
                    src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-2.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>man's</span>
          </li>
          <li>
            <span>women's</span>
          </li>
          <li>
            <span>jewelry</span>
          </li>
          <li>
            <span>perfume</span>
          </li>
          <li>
            <span>blog</span>
          </li>
          <li>
            <span>hot offers</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DescktopNav;
