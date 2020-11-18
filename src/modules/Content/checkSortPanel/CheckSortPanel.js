import React, { useContext } from 'react';
import { TopPanel } from './checksortpanel.style';
import { getMeals } from '../../../services/meal-service';
import Button from '../../../components/Button/Button';
import DataContext from '../../../context/Context';

const CheckSortPanel = () => {
  const { setMealsData, hide, setHide } = useContext(DataContext);

  const showList = async () => {
    if (!hide) {
      setHide(!hide);
    }
    const mealsData = await getMeals();
    setMealsData(mealsData);
  };

  const sortMenu = () => {
    console.log('Ordenar el menu');
  };

  return (
    <TopPanel className="sortcheckPanel">
      <Button
        text="Check list"
        onClick={showList}
      />
      <Button
        text="Sort"
        onClick={sortMenu}
      />
    </TopPanel>
  );
};

export default CheckSortPanel;
