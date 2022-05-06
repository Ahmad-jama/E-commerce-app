import { useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./singleproduct.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../features/loadSingleProductSlice";
import { addToCart } from "../../features/cartSlice";
const SingleProductPage = () => {
  const product = useSelector((store) => store.loadSingleProduct.product);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    } else {
      dispatch(getSingleProduct("1"));
    }
  }, []);

  const { category, imageOne, newPrice, oldPrice, quantity, ratings, title } =
    product;

  return (
    <div
      className="container"
      style={{
        height: `${id ? "100vh" : null}`,
        display: "grid",
        placeContent: "center",
      }}
    >
      <div className={styles.deal_box}>
        <div className={styles.image_container}>
          <img src={imageOne} alt={title} />
        </div>
        <div className={styles.content}>
          <div className={styles.ratings}>
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
            <AiOutlineStar color="#f6a355" />
          </div>
          <h3> {title}</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet consectetur Lorem ipsum dolo asdf as asdf asdf asasasdfr
          </p>
          <p className={styles.prices}>
            ${newPrice}.00 <span> ${oldPrice}.00 </span>
          </p>
          <button onClick={() => dispatch(addToCart(product))}>
            ADD TO CART
          </button>
          <div className={styles.count_sold}>
            <p>
              <span>already sold</span> :20
            </p>
            <p>
              <span>available</span>:20
            </p>
          </div>
          <div className={styles.progress}></div>
          <p>hurry up! offer ends in:</p>
          <div className={styles.days_left}>
            <div className={styles.box}>
              <p>360</p>
              <span>days</span>
            </div>
            <div className={styles.box}>
              <p>24</p>
              <span>Hours</span>
            </div>
            <div className={styles.box}>
              <p>59</p>
              <span>min</span>
            </div>
            <div className={styles.box}>
              <p>00</p>
              <span>sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
