import React from 'react';
import { BottomPanel } from './infographicPanel.style';
import Infographic from '../../../components/Infographic/Infographic';

const InfographicPanel = () => {
  const week = ['Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday'];
  return (
    <BottomPanel className="infographics">
      <div className="expandable">
        <Infographic
          text={`Nutri info ${week[0]}`}
        />
        <Infographic
          text="Nutri info total week"
        />
      </div>
    </BottomPanel>
  );
};

export default InfographicPanel;
