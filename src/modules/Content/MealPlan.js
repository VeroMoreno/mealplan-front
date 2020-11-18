import React from 'react';
import Footer from '../../components/Footer/footer.component';
import Header from '../../components/Header/header.component';
import CheckSortPanel from './checkSortPanel/CheckSortPanel';
import MenuCards from './menuCards/MenuCards';
import InfographicPanel from './infographicPanel/InfographicPanel';
import { ContentStyle } from './mealplan.style';

/*
El contexto tiene dos cosas: un consumnidor y un proovedor.
1 consume el objeto
2 provee el objeto (¿donde lo puedo usar?, todo donde venga rodeado por esto)
*/
import { DataContextProvider } from '../../context/Context';

// Hacemos que todos los elementos que están por debajo, tendrá acceso a este objeto mágico.
const MealPlan = () => (
  <DataContextProvider>
    <Header />
    <ContentStyle className="content">
      <CheckSortPanel />
      <MenuCards />
      <InfographicPanel />
    </ContentStyle>
    <Footer />
  </DataContextProvider>
);

export default MealPlan;
