import React from 'react'
import Footer from '../../components/Footer/footer.component';
import Header  from '../../components/Header/header.component';

// import { Footer, Header } from '../../components'; Why cant?

import CheckSortPanel from './checkSortPanel/CheckSortPanel';
import MenuCards from './menuCards/MenuCards';
import InfographicPanel from './infographicPanel/InfographicPanel';

import { ContentStyle } from './mealplan.style';

const MealPlan = () => {
    return (
    <>
        <Header/>
            <ContentStyle className="content">
                <CheckSortPanel/>
                <MenuCards/>
                <InfographicPanel/>
            </ContentStyle>
        <Footer/>
    </>
    );
}

export default MealPlan;