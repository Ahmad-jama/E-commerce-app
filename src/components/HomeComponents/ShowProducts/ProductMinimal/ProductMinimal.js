import { useEffect } from "react";
import MInimalBox from "./MinimalBox/MInimalBox";
import styles from "./minimal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../../../features/loadProductsSlice";
const ProductMinimal = () => {
  const newArival = "";
  const trending = "";
  const topRated = [
    {
      id: 1,
      name: "Girls Pnk Embro Design Top",
      category: "clothes",
      oldPrice: "$41.00",
      newPrice: "$20.00",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg",
    },
    {
      id: 2,
      name: " Relaxed Short Full Sleeve T-Shirt",
      category: "clothes",
      oldPrice: "$21.00",
      newPrice: "$12.00",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-2.jpg",
    },
    {
      id: 3,
      name: "Black Floral Wrap Midi Skirt",
      category: "clothes",
      oldPrice: "$221.00",
      newPrice: "$102.00",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-3.jpg",
    },
    {
      id: 4,
      name: "Pure Garment Dyed Cotton Shirt",
      category: "clothes",
      oldPrice: "$451.00",
      newPrice: "$132.00",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-1.jpg",
    },
  ];
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.loadProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (loading) {
    return <h1>loading....</h1>;
  }

  return (
    <div className={styles.minimal}>
      <MInimalBox title="New Arrivals" productsData={products.slice(0, 4)} />
      <MInimalBox title="Trending" productsData={products.slice(2, 6)} />
      <MInimalBox
        title="Top Rated"
        productsData={products.slice(4, products.length)}
      />
    </div>
  );
};

export default ProductMinimal;
