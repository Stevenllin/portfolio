import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { CircleProgressbarProps } from './types';

Chart.register(ArcElement);
const CircleProgressbar: React.FC<CircleProgressbarProps> = (props) => {
  console.log('props', props);
  console.log(props.value)
  const rest = 100 - props.value;
  const data = {
    datasets: [
      {
        data: [props.value, rest],
        backgroundColor: [
          "#D6AC86",
          "#282A29"
        ],
        borderWidth: [0, 0, 0, 0],
        display: true
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
            maintainAspectRatio: true,
            responsive: true
          }}
        />
          <div
            style={{
              position: "absolute",
              top: "55%",
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