import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PlatformOrdersDonutChart = () => {
  const seriesData = [44, 55, 13, 43, 22];
  const options = {
    chart: {
      width: 380,
      type: 'donut', // Changed type to donut
    },
    labels: ['Platform A', 'Platform B', 'Platform C', 'Platform D', 'Platform E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div className='bg-gray-50 rounded-2xl mt-4 mb-4'>
      <h1 className='p-5 text-center font-bold text-[20px]'>Platform Wise Orders</h1>
      <div id="chart" className='pl-[30%] p-6'>
        <ReactApexChart options={options} series={seriesData} type="donut" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PlatformOrdersDonutChart;
