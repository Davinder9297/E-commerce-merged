import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RevenueLineChart = () => {
  const seriesData = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62]
  }];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },

    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    }
  };

  return (
    <div className='bg-gray-50 rounded-2xl'>
        <h1 className='p-5 text-center font-bold text-[20px]'>Last Six Month Revenue</h1>
      <div id="chart">
        <ReactApexChart options={options} series={seriesData} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RevenueLineChart;
