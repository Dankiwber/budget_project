import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    DoughnutController,
    CategoryScale,
    Legend,
    ArcElement,
    Colors
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    DoughnutController,
    CategoryScale,
    Legend,
    ArcElement,
    Colors
  );
  export default function Doughnutchart({category_expense, spend_type}){
    const Colors_list = ['rgb(255, 99, 132, 0.6)', 'rgb(54, 162, 235, 0.6)', 'rgb(255, 205, 86, 0.6)', 'rgb(255, 102, 178, 0.6)', 'rgb(51, 255, 51, 0.6)', 'rgb(51, 255, 255, 0.6)']
    const chart_data = {
        labels: category_expense.map((item) => item.category),
        datasets: [
            {
              label: spend_type,
              data: category_expense.map((item) => item.total),
              backgroundColor: Colors_list.map((item) => item),
              hoverOffset: 4
            }
          ]
    }
    const chart_options = {
        responsive: true,
        plugins: {
            display: true,
            labels: {
                font: { size: 16 },
              },
              title: {
                display: true,
                text: `${spend_type} by category`,
                font: { weight: 'bolder', size: 20 },
              },
        }
    }    
    return(
        <Doughnut options={chart_options} data={chart_data} />
    )
}