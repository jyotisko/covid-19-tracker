import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router';
import { DataContext } from './../../context/DataContext';

const Chart = ({ data }) => {

  const { state } = useContext(DataContext);
  let { country } = useParams();

  if (!country) country = 'worldwide';

  const capitalizeWord = word => word.length > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : '';

  const dataForLine = {
    labels: Object.keys(data[state.currentDataType] || {}),
    datasets: [
      {
        label: `${capitalizeWord(country || '')} ${capitalizeWord(state.currentDataType)}`,
        data: Object.values(data[state.currentDataType] || {}),
        fill: true,
        backgroundColor: state.casesTypeColors[state.currentDataType].hex,
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className='chart'>
      <Line data={dataForLine} options={options} />
    </div>
  );
}

export default Chart;