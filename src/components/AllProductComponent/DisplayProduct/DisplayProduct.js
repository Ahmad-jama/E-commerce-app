import React from "react";
import { useSelector } from "react-redux";
import Product from "../../../components/Product/Product";

const DisplayProduct = () => {
  const { filteredProducts } = useSelector((store) => store.search);
  console.log(filteredProducts);
  if (filteredProducts == false) {
    return (
      <h1 style={{ display: "grid", placeItems: "center" }}>
        We couldn't find any results
      </h1>
    );
  }
  return (
    <>
      {filteredProducts.map((productInfo) => {
        return <Product key={productInfo.id} productInfo={productInfo} />;
      })}
    </>
  );
};

export default DisplayProduct;
