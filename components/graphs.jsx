import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarController,
    BarElement,
  } from "chart.js";
  
  ChartJS.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

import { Bar } from "react-chartjs-2";

//return the Bar
<Bar data={data} height={300} options={options} />;

const data = {
    labels: ["NFT Trade", "NFT Owners"],
    datasets: [
      {
        label: "Token 1",
        borderRadius: 20,
        data: [200, 6500],
        backgroundColor: "rgba(32,214,155,1)",
        barThickness: 10,
      },
      {
        label: "Token 2",
        borderRadius: 20,
        data: [500, 2000],
        backgroundColor: "rgba (1, 98, 255, 1)",
        barThickness: 10,
      },
    ],
  };

const options = {
    plugins: {
      legend: {
        positon: "top",
        align: "start",
        lables: {
          boxWidth: 5,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Token Comparison",
          display: true,
          color: "#000",
          font: {
            size: 18,
          },
        },
      },
      scales: {
        xAxis: {
          display: true,
        },
        yAxis: {
          dosplay: false,
          max: 0.1,
        },
      },
      elements: {
        bar: {
          barPercentage: 0.3,
          categoryPercentage: 1,
        },
      },
    },
  };


