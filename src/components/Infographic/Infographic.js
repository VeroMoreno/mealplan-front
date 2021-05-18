import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { InfoWrapper } from './infographic.style';

const data = {
  labels: ['no data'],
  datasets: [
    {
      label: 'Total of nutrients',
      data: [100],
      backgroundColor: [
        'rgba(115, 132, 141, 0.3)',
      ],
      borderColor: [
        'rgba(115, 132, 141, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const Infographic = ({ id, text, nutriData }) => (
  <InfoWrapper
    id={id}
    className="customChart"
  >
    {text && (
    <p>{text}</p>
    )}
    <div>
      <Doughnut
        data={nutriData || data}
        height={100}
        options={{
          maintainAspectRatio: false,
          legend: {
            position: 'left',
            labels: {
              boxWidth: 11,
            },
          },
          layout: {
            padding: {
              left: 90,
              right: 80,
            },
          },
          tooltips: {
            backgroundColor: '#4B5D67',
          },
        }}
      />
    </div>
  </InfoWrapper>
);

Infographic.propTypes = {
  text: PropTypes.string,
  nutriData: PropTypes.object,
  id: PropTypes.string,
};

Infographic.defaultProps = {
  text: 'Nutri info',
  nutriData: {},
  id: 'nutriInfo',
};

export default Infographic;
