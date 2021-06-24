import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import mealsHeaderImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsHeaderImage} alt="table full of meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
