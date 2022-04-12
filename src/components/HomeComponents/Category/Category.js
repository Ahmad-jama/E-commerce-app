import React from "react";
import { Link } from "react-router-dom";
import styles from "./category.module.css";
const categoriesInfo = [
  {
    id: 1,
    title: "DRESS & FROCK",
    image:
      "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg",
  },
  {
    id: 2,
    title: "WINTER WEAR",
    image:
      "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/coat.svg",
  },
  {
    id: 3,
    title: "GLASSES & LENS",
    image:
      "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg",
  },
  {
    id: 4,
    title: "SHORTS & JEANS",
    image:
      "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shorts.svg",
  },
  {
    id: 5,
    title: "Electronics",
    image:
      "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/watch.svg",
  },
  {
    id: 6,
    title: "HAT & CAPS",
    image:
      "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/hat.svg",
  },
];

const Category = () => {
  return (
    <div className={styles.category_container}>
      {categoriesInfo.map((category) => {
        const { id, title, image } = category;
        return (
          <div key={id} className={styles.category_box}>
            <div className={styles.img_container}>
              <img src={image} alt={title} />
            </div>
            <div>
              <h2>{title}</h2>
              <Link to={"/id"}>Show All</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
