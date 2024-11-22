import React, { useState } from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Dropdown from './Dropdown';

const BarCharts = ({ setSelectedMonth, chartData, pieChartData }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  console.log(chartData);
  console.log(pieChartData);
  return (
    <div className="m-5 flex items-center flex-col">
      <div className="flex gap-5 items-center mb-10">
        <span className="text-xl font-bold fs-1">Bar Chart State</span>
        -
        <Dropdown setSelectedMonth={setSelectedMonth} />
      </div>

      <div className="flex justify-center items-center md:flex-col md:justify-center ">
        <section className="flex gap-10 items-center justify-around border rounded-md mt-10 p-10">
          <BarChart width={600} height={350} data={chartData}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="range" />
            <YAxis dataKey="count" />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="count"
              fill="#8884d8"
              // shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              {/* {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))} */}
            </Bar>
          </BarChart>
        </section>
      </div>
    </div>
  );
};

export default BarCharts;
