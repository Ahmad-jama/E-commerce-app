import { useState } from "react";
import Accordion from "../../../Accordion/Accordion";
import styles from "./sidebar.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { hideCategorySidebar } from "../../../../features/categorySidebar";
const SidebarCategory = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const categorySidebar = useSelector((state) => state.categorySidebar.value);
  const dispatch = useDispatch();

  const AccordionContent = [
    {
      id: 1,
      accordion_name: "Clothes ",
      accordion_itmes: ["shirt", "shorts $ jeans", "sagety shoes", "wallet"],
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg",
    },
    {
      id: 2,
      accordion_name: "Footwear ",
      accordion_itmes: ["Sports", "Formal", "Casual", "Safety Shoes"],
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shoes.svg",
    },
    {
      id: 3,
      accordion_name: "Jewelry",
      accordion_itmes: ["Earrings", "Couple Rings", "Necklace"],
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/jewelry.svg",
    },
    {
      id: 4,
      accordion_name: "jewelry",
      accordion_itmes: ["Shampoo", " Sunscreen", "Body Wash  ", "Makeup Kit"],
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/cosmetics.svg",
    },
    {
      id: 5,
      accordion_name: "perfume",
      accordion_itmes: [
        "Clothes Perfume",
        " Deodorant",
        "Jacket",
        "Air Freshener",
      ],
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/perfume.svg",
    },
  ];
  const betsSellersInfo = [
    {
      id: 1,
      title: "men's hoodies t-shirt Men's Hoodies T-Shirt",
      ratings: 3,
      oldPrice: "$17.00",
      discountPrice: "$7.00",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/1.jpg",
    },
    {
      id: 2,
      title: "Baby Fabric Shoes",
      ratings: 3,
      oldPrice: "$102.00",
      discountPrice: "$27.00",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/2.jpg",
    },
    {
      id: 3,
      title: "Woolen Hat For Men",
      ratings: 3,
      oldPrice: "$132.00",
      discountPrice: "$78.00",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/4.jpg",
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.category}>
        <div>
          <h3>CATEGORY</h3>
          {categorySidebar ? (
            <AiOutlineCloseCircle
              onClick={() => dispatch(hideCategorySidebar())}
            />
          ) : null}{" "}
        </div>
        {AccordionContent.map((accordion) => {
          const { id, accordion_name, accordion_itmes, image } = accordion;
          return (
            <Accordion
              isSidebarCategory={true}
              selectedAccordion={selectedAccordion}
              setSelectedAccordion={setSelectedAccordion}
              key={id}
              id={id}
              name={accordion_name}
              items={accordion_itmes}
              image={image}
            />
          );
        })}
      </div>

      <h3>BEST SELLERS</h3>
      <div>
        {betsSellersInfo.map((products) => {
          const { id, image, title, ratings, discountPrice, oldPrice } =
            products;
          return (
            <div key={id} className={styles.sell_box}>
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <p>{title.slice(0, 11)}..</p>
                <div className="ratings">
                  <AiFillStar color="#f6a355" />
                  <AiFillStar color="#f6a355" />
                  <AiFillStar color="#f6a355" />
                  <AiOutlineStar color="#f6a355" />
                  <AiOutlineStar color="#f6a355" />
                </div>
                <p>
                  {" "}
                  <span>{oldPrice}</span> {discountPrice}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarCategory;
