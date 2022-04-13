import { useState } from "react";
import SidebarCategory from "./SidebarCategory/SidebarCategory";
import styles from "./showproducts.module.css";
import ProductMinimal from "./ProductMinimal/ProductMinimal";
import ProductFeatured from "./ProductFeatured/ProductFeatured";
import ProductMain from "./ProductMain/ProductMain";
const ShowProducts = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className={styles.product_container}>
      <div
        className={`${styles.overlay} ${
          showSidebar ? styles.show_overlay : ""
        }`}
      ></div>
      <div
        className={`${styles.sidebar} ${
          showSidebar ? styles.show_sidebar : ""
        }`}
      >
        <SidebarCategory
          setshowSidebar={setshowSidebar}
          showSidebar={showSidebar}
        />
      </div>
      <div className={styles.product_box}>
        <ProductMinimal />
        <ProductFeatured />
        <ProductMain />
      </div>
    </div>
  );
};

export default ShowProducts;
