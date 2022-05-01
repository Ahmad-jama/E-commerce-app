import { useEffect } from "react";
import Product from "../../../Product/Product";
import styles from "./product_main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../../../features/loadProductsSlice";
const ProductMain = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.loadProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className={styles.productsmain}>
      <h2>New Products</h2>
      <div className={styles.products_container}>
        {products.map((productInfo) => {
          return <Product key={productInfo.id} productInfo={productInfo} />;
        })}
      </div>
    </div>
  );
};

export default ProductMain;
