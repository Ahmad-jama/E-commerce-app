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
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
const Product = ({ productInfo }) => {
  const {
    category,
    id,
    imageOne,
    imageTwo,
    newPrice,
    oldPrice,
    quantity,
    ratings,
    title,
  } = productInfo;
  const [like, setlike] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className={styles.product}>
      <Link to={`/product/${id}`} className={styles.image_container}>
        <img src={imageOne} alt={title} className={styles.image_one} />
        <img src={imageTwo} alt={title} className={styles.image_two} />
      </Link>
      <div className={styles.icon_box}>
        <Link to={`/product/${id}`}>
          <AiOutlineEye />
        </Link>
        <span onClick={() => setlike(!like)}>
          {like ? <AiOutlineHeart /> : <AiTwotoneHeart />}
        </span>{" "}
        <span
          onClick={() => {
            dispatch(
              addToCart({
                id,
                title,
                newPrice,
                imageOne,
                quantity,
              })
            );
          }}
        >
          <IoBagAddOutline />
        </span>
      </div>
      <Link to={`/product/${id}`} className={styles.content}>
        <span>{category}</span>
        <p> {title} </p>
        <div className={styles.ratings}>
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
          <AiOutlineStar color="#f6a355" />
        </div>
        <p>
          ${newPrice} <span> ${oldPrice} </span>
        </p>
      </Link>
    </div>
  );
};

export default Product;
