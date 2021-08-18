import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '# of Reads',
      data: [12, 19, 13, 15, 12, 13, 15, 10, 9, 11, 20, 18],
      fill: false,
      backgroundColor: 'rgb(0,0,255)',
      borderColor: 'rgba(0,0,255)',
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

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Readership Levels By Month (Per Thousand)</h1>
    </div>
    <Line data={data} options={options} className='linechart' />
  </>
);

export default LineChart;