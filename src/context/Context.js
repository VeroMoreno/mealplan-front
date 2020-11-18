import React, { useState } from 'react';
import PropTypes from 'prop-types';
// createContext = Objeto mágico que se tiene que crear como valor inicial
const Context = React.createContext({});

export function DataContextProvider({ children }) {
  const [mealsData, setMealsData] = useState(null);
  const [hide, setHide] = useState(true);

  return (
    <Context.Provider value={{
      mealsData,
      setMealsData,
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
