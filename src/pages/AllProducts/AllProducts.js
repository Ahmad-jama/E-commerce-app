import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Category, DisplayProduct } from "../../components/AllProductComponent";
import Nav from "../../components/Nav/Nav";
import { getProducts } from "../../features/searchSllice";
import styles from "./allproducts.module.css";
const AllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className={styles.all_products}>
          <div className={styles.right}>
            <Category />
          </div>
          <div className={styles.left}>
            <DisplayProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
