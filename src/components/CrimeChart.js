import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,  // Register Category scale
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CrimeChart = () => {
  const data = {
    labels: ['Theft', 'Cybercrime', 'Violence', 'Fraud'],
    datasets: [
      {
        label: 'Number of Cases',
        data: [120, 190, 300, 150],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Crime Statistics</h2>
      <Bar data={data} />
    </div>
  );
};

export default CrimeChart;
