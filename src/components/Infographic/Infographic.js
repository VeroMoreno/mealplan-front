import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { InfoWrapper } from './infographic.style';

const data = {
  labels: ['Carbohydrates', 'Proteins', 'Fats'],
  datasets: [
    {
      label: 'Total of nutrients',
      data: [12, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    },
  ]
}

const Infographic = props => {
  return (
    <InfoWrapper>
      {props.text && (
        <p>{props.text}</p>
      )}
      <div>
        <Doughnut
          data={data}
          height={100}
          options={{
            maintainAspectRatio: false,
            legend: {
              position: 'right',
              labels: {
                boxWidth: 11,
              }
            },
            layout: {
              padding: {
                left: 90,
                right: 80,
              }
            },
            tooltips: {
              backgroundColor: '#4B5D67'
            }
          }}
        />
      </div>
    </InfoWrapper>
  );
}

Infographic.defaultProps = {
  text: 'Nutri info',
  data: ''
}

export default Infographic;