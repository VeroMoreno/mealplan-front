import React from 'react'
import { TopPanel } from './checksortpanel.style';

const CheckSortPanel = props => {
    return(
        <TopPanel className="sortcheckPanel">
            <div className="button">Check List</div>
            <div className="button">Sort</div>
        </TopPanel>
    );
}

export default CheckSortPanel;