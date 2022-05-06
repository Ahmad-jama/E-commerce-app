import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category, DisplayProduct } from "../../components/AllProductComponent";
import Nav from "../../components/Nav/Nav";
import { getProeuct } from "../../features/searchSllice";
import styles from "./allproducts.module.css";
const AllProducts = () => {
  const { products } = useSelector((store) => store.loadProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProeuct(products));
  }, [products]);

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
