import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { CircleProgressbarProps } from './types';

Chart.register(ArcElement);
const CircleProgressbar: React.FC<CircleProgressbarProps> = (props) => {
  const rest = 100 - props.value;
  const data = {
    datasets: [
      {
        data: [props.value, rest],
        backgroundColor: [
          "#D6AC86",
          "#282A29"
        ],
        borderRadius: 50,
        borderWidth: [0, 0, 0, 0],
        display: true,
        cutout: '80%'
      }
    ]
  };
  return (
    <div className="fs-xs fc-2">
      <div className="chart-container">
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false
              }
            },
            responsive: true
          }}
        />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center"
            }}
          >
            <p>{props.value}</p>
          </div>
      </div>
      <p className="text-center">{props.text}</p>
    </div>
  )
}

export default CircleProgressbar;