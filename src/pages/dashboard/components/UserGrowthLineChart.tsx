import React, { useEffect, useMemo, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement, // This is to fix the "point" not registered error
  ChartOptions,
  Chart as ChartType,
} from "chart.js";

// Register required chart components
ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const userGrowth = [
  { month: "January", users: 100 },
  { month: "February", users: 200 },
  { month: "March", users: 300 },
  { month: "April", users: 400 },
  { month: "May", users: 500 },
];

const UserGrowthChart = () => {
  const chartRef = useRef<ChartType | null>(null); // Specify the correct type for chartRef

  const chartData = useMemo(() => ({
    labels: userGrowth.map((item) => item.month),
    datasets: [
      {
        label: "User Growth",
        data: userGrowth.map((item) => item.users),
        borderColor: "#17421e",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  }), []);

  const options: ChartOptions = {
    responsive: true,
    animation: {
        duration: 4000, // Duration of the animation in ms
        easing: 'easeInOutQuad',
        onProgress: (animation) => {
          // You can add custom behavior while the animation is in progress
          console.log(`Animation progress: ${(animation.currentStep / animation.numSteps) * 100}%`);
        },
        onComplete: () => {
          // Custom behavior once the animation is complete
          console.log("Animation complete!");
        },
      },
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            return `Total Users: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Users",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  // Cleanup the chart instance when the component is unmounted
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the previous chart if it exists
      }
    };
  }, []);

  return (
    <div>
      <h2>User Growth Over Time</h2>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default UserGrowthChart;
