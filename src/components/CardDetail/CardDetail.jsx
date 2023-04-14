import React from "react";

//styles
import styles from "./CardDetail.module.scss";

const CardDetail = ({ name, image, gender, status, specie, origin, type }) => {
  return (
    <>
      <div className={styles.imageHolder}>
        <img className={styles.pic} src={image} alt="character" />
      </div>
      <div className={styles.heading}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.span}>Informations</span>
      </div>
      <div className={styles.info}>
        <span className={styles.preTitle}>Gender</span>
        <span className={styles.option}>{gender}</span>
        <span className={styles.preTitle}>Status</span>
        <span className={styles.option}>{status}</span>
        <span className={styles.preTitle}>Specie</span>
        <span className={styles.option}>{specie}</span>
        <span className={styles.preTitle}>Origin</span>
        <span className={styles.option}>{origin}</span>
        <span className={styles.preTitle}>Type</span>
        <span className={styles.option}>{type}</span>
      </div>
    </>
  );
};

export default CardDetail;
