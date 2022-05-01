import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../../components/Nav/Nav";
import Product from "../../components/Product/Product";
import { getProducts } from "../../features/searchSllice";
import { getFilterdProduct } from "../../features/searchSllice";
import styles from "./allproducts.module.css";
const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector((store) => store.search);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(filteredProducts, "the filterd");
  console.log(products);
  return (
    <>
      <Nav />
      <div className="container">
        <div className={styles.all_products}>
          <div className={styles.right}>
            <div className={styles.box}>
              <h3>CATEGORIES</h3>
              <ul>
                <li> All (20)</li>
                <li>Men (20)</li>
                <li>Hijab Women (40)</li>
                <li>Kids (160)</li>
                <li>Bags (15)</li>
                <li>Clothing (90)</li>
                <li>Shoes (350)</li>{" "}
              </ul>
            </div>
            <div className={styles.box}>
              <h3> FILTER PRICE</h3>
              <ul>
                <li>$00.00 - $50.00</li>
                <li>$50.00 - $100.00</li>
                <li>$100.00 - $150.00</li>
                <li>$150.00 - $200.00</li>
                <li>$200.00 - $250.00</li>
                <li>$250.00 - $300.00</li>
              </ul>
            </div>
          </div>
          <div className={styles.left}>
            {filteredProducts.map((productInfo) => {
              return <Product key={productInfo.id} productInfo={productInfo} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
