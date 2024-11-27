
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  TooltipItem,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

// Sample weekly active users data
const weeklyActiveUsers = [
  { day: "Monday", users: 50 },
  { day: "Tuesday", users: 75 },
  { day: "Wednesday", users: 100 },
  { day: "Thursday", users: 90 },
  { day: "Friday", users: 120 },
  { day: "Saturday", users: 60 },
  { day: "Sunday", users: 30 },
];

const WeeklyBarChart = () => {
  // Data for the Bar chart
  const data = {
    labels: weeklyActiveUsers.map((item) => item.day), // Days of the week
    datasets: [
      {
        label: "Active Users",
        data: weeklyActiveUsers.map((item) => item.users), // Number of active users per day
        backgroundColor: "#17421e", 
        borderColor: "#3085d6", 
        borderWidth: 1,
      },
    ],
  };

  // Options for the Bar chart
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
        position: "top" as const, // Legend at the top
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"bar">) => {
            const value = tooltipItem.raw as number;
            return `Active Users: ${value}`;
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
          text: "Days of the Week",
        },
      },
    },
  };

  return (
    <div className="mt-16" style={{ width: "80%", margin: "0 auto" }}>
      <h2>Weekly Active Users</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyBarChart;
