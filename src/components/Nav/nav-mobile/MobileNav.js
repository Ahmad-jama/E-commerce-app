import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline, IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./mobile.module.css";
const MobileNav = ({ setShowAside }) => {
  return (
    <div className={styles.Nav_icons}>
      <button>
        <IoMdMenu onClick={() => setShowAside(true)} />
      </button>

      <button>
        <IoHomeOutline />
      </button>

      <button>
        <AiOutlineAppstore />
      </button>

      <Link to={"/"} className={styles.bag}>
        <IoBagHandleOutline />
      </Link>
    </div>
  );
};

export default MobileNav;
