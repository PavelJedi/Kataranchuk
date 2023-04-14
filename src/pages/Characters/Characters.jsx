import React, { useState, useEffect, useCallback } from "react";

//services
import { getCharacters } from "../../service/CharactersService";

//components
import Card from "../../components/Card/Card";

//styles
import styles from "./Characters.module.scss";
import logo from "../../assets/Logo.png";

const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchCharacters = useCallback(async () => {
    try {
      setIsLoading(true);
      const fetchPeople = await getCharacters();
      setData(fetchPeople);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filtered = data.slice(0, 8).filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className={styles.content}>
        <div className={styles.imageHolder}>
          <img src={logo} alt="logo" style={{ maxWidth: "600px" }} />
        </div>
        <div className={styles.inputHolder}>
          <input
            className={styles.input}
            type="text"
            placeholder="Filter by name..."
            onChange={handleInput}
            value={search}
          />
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.cards}>
            {filtered.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                species={card.species}
                image={card.image}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Characters;
