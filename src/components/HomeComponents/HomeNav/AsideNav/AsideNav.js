import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Accordion from "../../../Accordion/Accordion";
import styles from "./aside.module.css";

import { useSelector, useDispatch } from "react-redux";
import { hideNavSidebar } from "../../../../features/navSidebar";

const AsideNav = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const navsidebar = useSelector((state) => state.navsidebar.value);
  const dispatch = useDispatch();
  const AccordionContent = [
    { id: 1, accordion_name: "home" },
    {
      id: 2,
      accordion_name: "men's",
      accordion_itmes: ["shirt", "shorts $ jeans", "sagety shoes", "wallet"],
    },
    {
      id: 3,
      accordion_name: "Women's",
      accordion_itmes: [
        "Dress & Frock",
        "Earrings",
        "  Necklace",
        "Makeup Kit",
      ],
    },
    {
      id: 4,
      accordion_name: "jewelry",
      accordion_itmes: [
        "Earrings",
        " Couple Rings  ",
        "Necklace  ",
        "Bracelets",
      ],
    },
    {
      id: 5,
      accordion_name: "perfume",
      accordion_itmes: [
        "Clothes Perfume",
        " Deodorant",
        "Flower Fragrance  ",
        "Air Freshener",
      ],
    },
    { id: 6, accordion_name: "blog" },
    { id: 7, accordion_name: "hot offers" },
  ];

  return (
    <div>
      <div
        className={`${styles.overlay} ${navsidebar ? styles.show_overlay : ""}`}
        onClick={() => dispatch(hideNavSidebar())}
      ></div>

      <aside
        className={`${styles.aside_nav} ${navsidebar ? styles.show_aside : ""}`}
      >
        <div className={styles.aside_tilte}>
          <h2>menu</h2>
          <button>
            <AiOutlineCloseCircle
              onClick={() => {
                dispatch(hideNavSidebar());
              }}
            />
          </button>
        </div>

        {AccordionContent.map((accordion) => {
          const { id, accordion_name, accordion_itmes } = accordion;
          return (
            <Accordion
              selectedAccordion={selectedAccordion}
              setSelectedAccordion={setSelectedAccordion}
              key={id}
              id={id}
              name={accordion_name}
              items={accordion_itmes}
            />
          );
        })}
      </aside>
    </div>
  );
};

export default AsideNav;
