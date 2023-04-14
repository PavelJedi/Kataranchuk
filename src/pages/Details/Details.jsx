import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//styles
import styles from "./Details.module.scss";

//context
import { CardContext } from "../../context/AppProvider";
import CardDetail from "../../components/CardDetail/CardDetail";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading } = useContext(CardContext);
  console.log(data, "data:characters");

  const card = data.find((character) => character.id === parseInt(id));
  console.log(card, "card");

  return (
    <div className={styles.container}>
      <div className={styles.buttonHolder}>
        <div className={styles.backArrow} onClick={() => navigate(-1)}>
          {" "}
          -- GO BACK
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.content}>
          {card && (
            <CardDetail
              name={card.name}
              image={card.image}
              gender={card.gender}
              status={card.status}
              specie={card.specie}
              origin={card.origin.name}
              type={card.type}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
