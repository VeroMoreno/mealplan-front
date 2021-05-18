import React, { useContext } from 'react';
import { TopPanel } from './checksortpanel.style';
import { getMeals, getLunchs, getDinners } from '../../../services/meal-back-service';
// import { getMeals, getLunchs, getDinners } from '../../../services/meal-service';
import Button from '../../../components/Button/Button';
import DataContext from '../../../context/Context';

const CheckSortPanel = () => {
  const {
    setMealsData,
    hide,
    setHide,
    setLunchData,
    setDinnerData,
  } = useContext(DataContext);

  const showList = async () => {
    if (!hide) {
      setHide(!hide);
    }
    const mealsData = await getMeals();
    setMealsData(mealsData);
  };

  const shuffle = (data) => {
    let currentI = data.length;
    while (currentI !== 0) {
      const randomI = Math.floor(Math.random() * currentI);
      currentI -= 1;
      const aux = data[currentI];
      //  Disallow Reassignment of Function Parameters
      data[currentI] = data[randomI];
      data[randomI] = aux;
    }
    return data;
  };

  const sortMenu = async () => {
    const lunchData = await getLunchs();
    const randomLunchData = shuffle(lunchData);
    setLunchData(randomLunchData);
    const dinnerData = await getDinners();
    const randomDinerData = shuffle(dinnerData);
    setDinnerData(randomDinerData);
  };

  return (
    <TopPanel className="sortcheckPanel">
      <Button
        text="Check list"
        onClick={showList}
      />
      <Button
        text="Random"
        onClick={sortMenu}
      />
    </TopPanel>
  );
};

export default CheckSortPanel;
