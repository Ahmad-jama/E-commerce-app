import React from "react";
import MInimalBox from "./MinimalBox/MInimalBox";
import styles from "./minimal.module.css";
const ProductMinimal = () => {
  const newArival = [
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
  const trending = [
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
  return (
    <div className={styles.minimal}>
      <MInimalBox title="New Arrivals" productsData={newArival} />
      <MInimalBox title="Trending" productsData={trending} />
      <MInimalBox title="Top Rated" productsData={topRated} />
    </div>
  );
};

export default ProductMinimal;
