import React from "react";
import Product from "./Product/Product";
import styles from "./product_main.module.css";
const productMain = () => {
  const productData = [
    {
      id: 1,
      title: "Mens Winter Leathers Jackets",
      type: "jaket",
      oldPrice: 32.0,
      newPrice: 45.0,
      ratings: "3",
      quantity: 1,
      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-4.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-3.jpg",
    },
    {
      id: 2,
      title: "Pure Garment Dyed Cotton Shirt",
      type: "SHIRT",
      oldPrice: 326.0,
      newPrice: 445.0,
      ratings: "3",
      quantity: 1,

      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-2.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-1.jpg",
    },
    {
      id: 3,
      title: "MEN Yarn Fleece Full-Zip Jacket ",
      type: "jaket",
      oldPrice: 102.0,
      newPrice: 153.0,
      ratings: "3",
      quantity: 1,

      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-6.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-5.jpg",
    },
    {
      id: 4,

      title: "Black Floral Wrap Midi Skirt",
      type: "skirt",
      oldPrice: 32.0,
      newPrice: 45.0,
      ratings: "3",
      quantity: 1,

      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-4.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-3.jpg",
    },
    {
      id: 5,
      title: "Casual Men's Brown Shoes",
      type: "CASUAL",
      oldPrice: 302.0,
      newPrice: 450.0,
      ratings: "3",
      quantity: 1,

      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-2_1.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-2.jpg",
    },
    {
      id: 6,
      title: " Pocket Watch Leather Pouch",
      type: "WATCHES",
      oldPrice: 32.0,
      newPrice: 45.0,
      quantity: 1,

      ratings: "3",
      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-4.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-3.jpg",
    },
    {
      id: 7,
      title: "  Womens Party Wear Shoes",
      type: "PARTY WEAR",
      quantity: 1,

      oldPrice: 32.0,
      newPrice: 45.0,
      ratings: "3",
      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/party-wear-2.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/party-wear-1.jpg",
    },
    {
      id: 8,
      title: " Better Basics French Terry Sweatshorts",
      type: "SHORTS",
      oldPrice: 32.0,
      quantity: 1,

      newPrice: 45.0,
      ratings: "3",

      imageOne:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shorts-1.jpg",
      imageTwo:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shorts-2.jpg",
    },
  ];

  return (
    <div className={styles.productsmain}>
      <h2>New Products</h2>
      <div className={styles.products_container}>
        {productData.map((product) => {
          const {
            id,
            title,
            type,
            oldPrice,
            newPrice,
            ratings,
            imageOne,
            quantity,
            imageTwo,
          } = product;
          return (
            <Product
              key={id}
              id={id}
              title={title}
              type={type}
              ratings={ratings}
              oldPrice={oldPrice}
              newPrice={newPrice}
              imageOne={imageOne}
              imageTwo={imageTwo}
              quantity={quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default productMain;
