import React from 'react'
import Footer from '../../components/Footer/footer.component';
import Header  from '../../components/Header/header.component';

// import { Footer, Header } from '../../components'; Why cant?

import CheckSortPanel from './checkSortPanel/CheckSortPanel';
import MenuCards from './menuCards/MenuCards';
import InfographicPanel from './infographicPanel/InfographicPanel';

const MealPlan = props => {
    return(
    <>
    <Header/>
        <CheckSortPanel/>
        <MenuCards/>
        <InfographicPanel/>
    <Footer/>
    </>
    );
}

export default MealPlan;