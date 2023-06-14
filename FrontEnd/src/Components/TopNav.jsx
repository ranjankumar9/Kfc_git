import React from "react";
import styles from "../Styles/TopNav.module.css";

const TopNav = () => {
  return (
    <div>
      <div className={styles.top}>
        <i className="fa-solid fa-location-dot"></i>
        <p>Allow location access for local store menu and promos</p>
        <button>set Loacation</button>
      </div>
    </div>
  );
};

export default TopNav;
