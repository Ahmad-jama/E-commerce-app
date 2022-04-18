import SidebarCategory from "./SidebarCategory/SidebarCategory";
import styles from "./showproducts.module.css";
import ProductMinimal from "./ProductMinimal/ProductMinimal";
import ProductFeatured from "./ProductFeatured/ProductFeatured";
import ProductMain from "./ProductMain/ProductMain";
import { useSelector, useDispatch } from "react-redux";
import { hideCategorySidebar } from "../../../features/categorySidebar";
const ShowProducts = () => {
  const categorySidebar = useSelector((state) => state.categorySidebar.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.product_container}>
      <div
        onClick={() => dispatch(hideCategorySidebar())}
        className={`${styles.overlay} ${
          categorySidebar ? styles.show_overlay : ""
        }`}
      ></div>
      <div
        className={`${styles.sidebar} ${
          categorySidebar ? styles.show_sidebar : ""
        }`}
      >
        <SidebarCategory />
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
