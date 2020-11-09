import React from 'react';
import Card from './Card/Card';
import menuData from '../../../menuData.json';
import { MenuPanel } from './menuCards.style';

const MenuCards = () => {
  const week = ['Mon', 'Thu', 'Wed', 'Thur', 'Fri'];
  const lunchMeals = menuData.items.filter((meal) => meal.type.includes('lunch'));
  const dinnerMeals = menuData.items.filter((meal) => meal.type.includes('dinner'));
  return (
    <MenuPanel>
      <main>
        <div className="calendar">
          <div className="calendar__header">
            {week && week.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="calendar__week lunch">
            {lunchMeals && lunchMeals.slice(0, 5).map((lunch) => (
              <div className="calendar__day day">
                <Card
                  key={lunch}
                  name={lunch.name}
                />
              </div>
            ))}
          </div>
          <div className="calendar__week dinner">
            {dinnerMeals && dinnerMeals.slice(0, 5).map((dinner) => (
              <div className="calendar__day day">
                <Card
                  key={dinner}
                  name={dinner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </MenuPanel>
  );
};

export default MenuCards;
