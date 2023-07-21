import './App.css';
import Paper from '@mui/material/Paper';
import Chart from 'chart.js/auto'
import { useEffect, useRef } from 'react';

function App() {
  // const chartRef = useRef()
  const labels = ["1", "2", "3", "4", "5"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Assessment Score",
        data: [20, 50, 40, 80, 100],
        fill: false,
        borderColor: "#a259ff",
        tension: 0.1,
        fill: true,
      },
    ],
  };
  // const options = {
  //   scales: {
  //     x: {
  //       grid: {
  //         color: "#3c3c3c",
  //       },
  //       ticks: {
  //         color: "#ffffff",
  //       },
  //     },
  //     y: {
  //       grid: {
  //         color: "#3c3c3c",
  //       },
  //       ticks: {
  //         color: "#ffffff",
  //       },
  //     },
  //   },
  // };
  const config = {
    type: 'line',
    data: data,
  }

  let myChart = null;

  useEffect(() => {
    myChart = new Chart(document.getElementById('chart-id'), config);
    return () => {
      if (myChart)
        myChart.destroy()
    }
  }, [])

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #1a1a1a 10%, #4b4b4b 75%)",
        color: "#1b1b1b",
        height: "200px",
        width: "100%",
      }}
    >
      <Paper sx={{ w: 250, h: 400, background: 'red' }}>
          <p>testing</p>
          <canvas style={{ background: 'white' }} id="chart-id" />
      </Paper>
    </div>
    
  );
};

export default App;
