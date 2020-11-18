import React, { useState } from 'react';
import PropTypes from 'prop-types';
// createContext = Objeto mágico que se tiene que crear como valor inicial
const Context = React.createContext({});

export function DataContextProvider({ children }) {
  const [mealsData, setMealsData] = useState(null);
  const [lunchData, setLunchData] = useState(null);
  const [dinnerData, setDinnerData] = useState(null);
  const [hide, setHide] = useState(true);

  return (
    <Context.Provider value={{
      mealsData,
      setMealsData,
      lunchData,
      setLunchData,
      dinnerData,
      setDinnerData,
      hide,
      setHide,
    }}
    >
      {children}
    </Context.Provider>
  );
}

DataContextProvider.propTypes = { children: PropTypes.element.isRequired };

export default Context;
