import styles from "./accordion.module.css";
import { IoAdd } from "react-icons/io5";

const Accordion = ({ name, items, toggleAccordion, id, selectedAccordion }) => {
  if (!items) {
    return (
      <div className={styles.accordion}>
        <div className={styles.accordion_title}>
          <p>{name}</p>
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
