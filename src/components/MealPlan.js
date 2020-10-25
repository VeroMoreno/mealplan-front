import React from 'react'
import Menu from '../components/Menu/Menu';

const MealPlan = props => {
    return(
    <>
        <div>
            <h1>{props.name}</h1>
            <p>Welcome to my healthy planner</p>
        </div>
        <Menu/>
    </>
    );
}

export default MealPlan;