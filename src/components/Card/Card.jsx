import React from "react";

//style
import styles from "./Card.module.scss";

//components
import CardImg from "../CardImg/CardImg";
import CardDesc from "../CardDesc/CardDesc";

const Card = ({ id, image, name, species }) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.imgHolder}>
          <CardImg id={id} image={image} name={name}  />
        </div>
        <div className={styles.textHolder}>
          <CardDesc name={name} species={species} />
        </div>
      </div>
    </>
  );
};

export default Card;
