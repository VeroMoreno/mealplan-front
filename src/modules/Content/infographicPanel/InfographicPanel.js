import React, { useContext } from 'react';
import { BottomPanel } from './infographicPanel.style';
import Infographic from '../../../components/Infographic/Infographic';
import DataContext from '../../../context/Context';

const InfographicPanel = () => {
  const { mealsData: data, hide, setHide } = useContext(DataContext);

  const week = ['Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday'];
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
            text={`Nutri info ${week[0]}`}
          />
          <Infographic
            text="Nutri info total week"
          />
        </>
        )}
      </div>
    </BottomPanel>
  );
};

export default InfographicPanel;
