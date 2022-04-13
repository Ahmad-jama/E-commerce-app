import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Accordion from "../../Accordion/Accordion";
import styles from "./aside.module.css";

const AsideNav = ({ setShowAside, showAside }) => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

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
        className={`${styles.overlay} ${showAside ? styles.show_overlay : ""}`}
        onClick={() => setShowAside(false)}
      ></div>

      <aside
        className={`${styles.aside_nav} ${showAside ? styles.show_aside : ""}`}
      >
        <div className={styles.aside_tilte}>
          <h2>menu</h2>
          <button>
            <AiOutlineCloseCircle
              onClick={() => {
                setShowAside(false);
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
