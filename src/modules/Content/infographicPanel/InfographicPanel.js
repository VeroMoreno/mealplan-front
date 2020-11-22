import React, { useContext } from 'react';
import { BottomPanel } from './infographicPanel.style';
import Infographic from '../../../components/Infographic/Infographic';
import DataContext from '../../../context/Context';

const InfographicPanel = () => {
  const {
    mealsData: data,
    hide,
    setHide,
    lunchData,
    dinnerData,
    dayOfWeek,
  } = useContext(DataContext);

  const getTotalDayNutrients = (nutrient) => {
    const sort = {
      Mon: 1, Thu: 2, Wed: 3, Thur: 4, Fri: 5,
    };
    const startIndex = sort[dayOfWeek] - 1;
    const endIndex = sort[dayOfWeek];
    const totalLunchNutrients = lunchData.slice(startIndex, endIndex)
      .reduce((acu, element) => element.calories[nutrient] + acu, 0);
    const totalDinnerNutrients = dinnerData.slice(startIndex, endIndex)
      .reduce((acu, element) => element.calories[nutrient] + acu, 0);
    return totalLunchNutrients + totalDinnerNutrients;
  };

  const getInfoDayData = () => {
    const nutrients = ['carbohydrates', 'proteins', 'fats'];
    const total = nutrients.map((nutrient) => getTotalDayNutrients(nutrient));
    const totalInfoWeek = {
      labels: ['Carbohydrates', 'Proteins', 'Fats'],
      datasets: [
        {
          label: 'Total of nutrients of the day',
          data: total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return totalInfoWeek;
  };

  const getTotalNutrients = (nutrient) => {
    const totalLunchNutrients = lunchData.slice(0, 5)
      .reduce((acu, element) => element.calories[nutrient] + acu, 0);
    const totalDinnerNutrients = dinnerData.slice(0, 5)
      .reduce((acu, element) => element.calories[nutrient] + acu, 0);
    return totalLunchNutrients + totalDinnerNutrients;
  };

  const getInfoWeekData = () => {
    const nutrients = ['carbohydrates', 'proteins', 'fats'];
    const total = nutrients.map((nutrient) => getTotalNutrients(nutrient));
    const totalInfoWeek = {
      labels: ['Carbohydrates', 'Proteins', 'Fats'],
      datasets: [
        {
          label: 'Total of nutrients of the week',
          data: total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return totalInfoWeek;
  };

  const week = {
    Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday',
  };
  return (
    <BottomPanel className="infographics">
      <div className="expandable">
        {data && hide && (
          <>
            <ol className="expandable--menuList">
              {data.items.map((el) => (
                <li>{el.name}</li>
              ))}
            </ol>
            <button
              type="button"
              onClick={() => setHide(!hide)}
            >
              X
            </button>
          </>
        )}
        {(!data || !hide) && (
        <>
          <Infographic
            id="infoDay"
            text={(lunchData && dinnerData) ? `Nutri info ${dayOfWeek ? week[dayOfWeek] : '[Click a week day]'}` : ''}
            nutriData={(lunchData && dinnerData) ? getInfoDayData() : null}
          />
          <Infographic
            id="infoWeek"
            text={(lunchData && dinnerData) ? 'Nutri info total week' : ''}
            nutriData={(lunchData && dinnerData) ? getInfoWeekData() : null}
          />
        </>
        )}
      </div>
    </BottomPanel>
  );
};

export default InfographicPanel;
