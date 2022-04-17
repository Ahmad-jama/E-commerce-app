import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiTwotoneHeart,
} from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import styles from "./product.module.css";
const Product = ({
  id,
  title,
  type,
  oldPrice,
  newPrice,
  ratings,
  imageOne,
  imageTwo,
}) => {
  const [like, setlike] = useState(true);
  return (
    <Link to={"/"} className={styles.product}>
      <div className={styles.image_container}>
        <img src={imageOne} alt={title} className={styles.image_one} />
        <img src={imageTwo} alt={title} className={styles.image_two} />
      </div>
      <div className={styles.icon_box}>
        <Link to={"/"}>
          <AiOutlineEye />
        </Link>
        <span onClick={() => setlike(!like)}>
          {like ? <AiOutlineHeart /> : <AiTwotoneHeart />}
        </span>{" "}
        <Link to={"/"}>
          <IoBagAddOutline />
        </Link>{" "}
      </div>
      <div className={styles.content}>
        <span>{type}</span>
        <p> {title} </p>
        <div className={styles.ratings}>
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
        </div>
        <p>
          {newPrice} <span> {oldPrice} </span>
        </p>
      </div>
    </Link>
  );
};

export default Product;
