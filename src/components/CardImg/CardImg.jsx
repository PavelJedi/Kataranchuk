import React from "react";
import { Link } from "react-router-dom";

//style
import styles from "./CardImg.module.scss";

const CardImg = ({ id, name, image }) => {
  return (
    <div>
      {image && (
        <Link to={`/details/${id}`} state={{ date: name }}>
          <img className={styles.img} src={image} alt={name} />
        </Link>
      )}
      {!image && (
        <Link to={`/details`}>
          <p className={styles.noImage}>No image</p>
        </Link>
      )}
    </div>
  );
};

export default CardImg;
