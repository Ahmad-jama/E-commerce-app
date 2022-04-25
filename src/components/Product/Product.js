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
import { addToCart } from "../../features/cart";
const Product = ({
  id,
  title,
  type,
  oldPrice,
  newPrice,
  ratings,
  imageOne,
  imageTwo,
  quantity,
}) => {
  const [like, setlike] = useState(true);

  const dispatch = useDispatch();
  return (
    <div className={styles.product}>
      <Link to={"/"} className={styles.image_container}>
        <img src={imageOne} alt={title} className={styles.image_one} />
        <img src={imageTwo} alt={title} className={styles.image_two} />
      </Link>
      <div className={styles.icon_box}>
        <Link to={"/"}>
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
                type,
                oldPrice,
                newPrice,
                ratings,
                imageOne,
                quantity,
                imageTwo,
              })
            );
          }}
        >
          <IoBagAddOutline />
        </span>
      </div>
      <Link to={"/"} className={styles.content}>
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
          ${newPrice} <span> ${oldPrice} </span>
        </p>
      </Link>
    </div>
  );
};

export default Product;
