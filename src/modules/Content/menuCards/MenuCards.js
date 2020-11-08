import React from 'react';
import { MenuPanel } from './menuCards.style';

const MenuCards = props => {
    return(
        <MenuPanel>
            <main>
                <div className="calendar">
                    <div className="calendar__header">
                        <div>mon</div>
                        <div>tue</div>
                        <div>wed</div>
                        <div>thu</div>
                        <div>fri</div>
                    </div>
                    <div className="calendar__week">
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                    </div>
                    <div className="calendar__week">
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                        <div className="calendar__day day"></div>
                    </div>
                </div>
            </main>
        </MenuPanel>
    );
}

export default MenuCards;
