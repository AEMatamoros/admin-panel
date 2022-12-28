import { Bar } from "react-chartjs-2";
import { iChart } from "../../interfaces/graphic.interface";

const chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Titulo de grafico",
  },
};


const AppBarChart = ({ dataChart, optionChart = chartOptions }: iChart) => {
  return (
    <div className="m-2 min-w-full">
      <Bar  data={dataChart}  />
    </div>
    /* /> */
  );
};

export default AppBarChart;
