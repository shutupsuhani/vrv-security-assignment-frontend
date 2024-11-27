import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttendanceGraph: React.FC = () => {
  // Weekly attendance data (this could be dynamic or fetched from an API)
  const attendanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    datasets: [
      {
        label: 'Attendance',
        data: [5, 7, 6, 5, 8, 3, 4], // Attendance counts for each day (this is sample data)
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-8 w-full p-10">
      <h3 className="font-medium text-gray-700">Weekly Active</h3>
      <div className="mt-4">
        <Bar data={attendanceData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default AttendanceGraph;
