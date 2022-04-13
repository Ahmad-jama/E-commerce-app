import styles from "./accordion.module.css";
import { IoAdd } from "react-icons/io5";

const Accordion = ({
  name,
  items,
  setSelectedAccordion,
  id,
  selectedAccordion,
  isSidebarCategory,
  image,
}) => {
  const toggleAccordion = (id) => {
    if (id == selectedAccordion) {
      setSelectedAccordion(null);
    } else {
      setSelectedAccordion(id);
    }
  };
  if (!items) {
    return (
      <div className={styles.accordion}>
        <div className={styles.accordion_title}>
          <p>{name}</p>
        </div>
      </div>
    );
  }
  if (isSidebarCategory) {
    return (
      <div className={`${styles.accordion} ${styles.category_accordion}`}>
        <div
          className={`${styles.accordion_title}  ${
            selectedAccordion == id ? styles.show : ""
          } `}
        >
          <div>
            <img src={image} alt="" />
            <p>{name}</p>
          </div>
          <button onClick={() => toggleAccordion(id)}>
            <IoAdd />
          </button>
        </div>
        <div
          className={` ${styles.accordion_content} ${
            selectedAccordion == id ? styles.show : ""
          } `}
        >
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_title}>
        <p>{name}</p>
        <button onClick={() => toggleAccordion(id)}>
          <IoAdd />
        </button>
      </div>
      <div
        className={` ${styles.accordion_content} ${
          selectedAccordion == id ? styles.show : ""
        } `}
      >
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}{" "}
      </div>
    </div>
  );
};

export default Accordion;
