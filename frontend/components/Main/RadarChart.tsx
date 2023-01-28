import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import obj from '@/Types/Data';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export default function RadarChart({MapData}:{MapData:obj}) {
 const data = {
    labels: ['Marketting', 'R&D', 'Administration'],
    datasets: [
      {
        label: 'Spendings',
        data: [MapData.Marketing_Spend, MapData.RD_Spend, MapData.Administration],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  return MapData&& <Radar data={data} />;
}
