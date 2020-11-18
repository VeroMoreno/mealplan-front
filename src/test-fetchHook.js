import { useState, useEffect } from 'react';

function useFetch(url) {
  console.log("url", url);
  /*
  definimos menuData y lo que usaremos más adelante para actualizar el estado: setData
  Establecemos el valor inicial de nuestro estado, que es nulo
  */
  const [menuData, setData] = useState(null);

  async function fetchUrl() {
    console.log("entra");
  }
  /* Al final de useEffect, agregamos una matriz vacía [],
  porque de esa manera, useEffect se ejecuta solo una vez. */
  useEffect(() => {
    console.log("1");
    fetchUrl();
    console.log("2");
  }, []);
  return [menuData];
}

export { useFetch };

/*
UseState es un Hook que permite tener variables de estado en componentes funcionales.
Nos permite usar las mismas capacidades que proporciona this.state en una clase.

UseEffect ejecuta funciones después de que se renderiza el componente.
Podemos pensar en UseEffect como componentDidMount, componentDidUpdate y
componentWillUnmount combinados.

    const response = await fetch(url);
    const json = await response.json();
    setData(json);
*/
