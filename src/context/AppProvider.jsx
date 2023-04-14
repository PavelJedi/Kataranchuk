import React, { createContext, useCallback, useEffect, useState } from "react";

//service
import { getCharacters } from "../service/CharactersService";

//context
export const CardContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getCharacters();
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <CardContext.Provider value={{ data, fetchData, isLoading, error }}>
      {children}
    </CardContext.Provider>
  );
};

export default AppProvider;
