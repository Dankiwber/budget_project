import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
  );
  
  export default function Barchart({transaction_month_list}){
    const chart_data = {
        labels: transaction_month_list.map((item) => item.month),
        datasets: [
          {
            label: 'Monthly Expenses',
            data: transaction_month_list.map((item) => item.total),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ],
      };
    
      const chart_options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: { size: 16 },
            },
          },
          title: {
            display: true,
            text: 'Expenses Overview in year 2024',
            font: { weight: 'bolder', size: 20 },
          },
        },
        scales: {
          x: {
            ticks: { font: { weight: 'bolder', size: 17 } },
          },
          y: {
            ticks: { font: { weight: 'bolder', size: 17 } },
          },
        },
      };
      return(
        <Bar className="Barchart_canvas" options={chart_options} data={chart_data} />
      )
  }