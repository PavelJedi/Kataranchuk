import React from "react";

//styles
import styles from "./CardDesc.module.scss";

const CardDesc = ({ name, species }) => {
  return (
    <div>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.species}>{species}</span>
    </div>
  );
};

export default CardDesc;
