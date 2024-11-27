import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from "chart.js";

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample role distribution data
const roleDistribution = [
  { role: "Admin", count: 5 },
  { role: "User", count: 7 },
  { role: "Manager", count: 3 },
];

const RolePieChart = () => {
  // Data for the Pie chart
  const data = {
    labels: roleDistribution.map((item) => item.role), // Extract roles
    datasets: [
      {
        data: roleDistribution.map((item) => item.count), // Extract counts
        backgroundColor: ["#17421e", "#60a86c", "#04300c"], // Colors for slices
        hoverBackgroundColor: ["#FF4384", "#36A2DB", "#FFAE56"], // Hover colors
      },
    ],
  };

  // Options for the Pie chart
  const options = {
    responsive: true,
    animation: {
      duration: 5000, 
      easing: "easeInOutQuad", 
      onProgress: (animation) => {
        console.log(`Animation progress: ${(animation.currentStep / animation.numSteps) * 100}%`);
      },
      onComplete: () => {
        console.log("Animation complete!");
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const, // Ensure TypeScript understands this as a valid value
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'pie'>) => {
            const count = tooltipItem.raw as number; // Tooltip item raw value is the slice count
            const total = roleDistribution.reduce((sum, item) => sum + item.count, 0);
            const percentage = ((count / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${count} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "30%", margin: "0 auto" }}>
      <h2>Role Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default RolePieChart;
