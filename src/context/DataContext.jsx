import React, { createContext, useState, useEffect } from 'react';
import jsonData from './data.json';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Seteamos los datos al estado
    setData(jsonData);
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };