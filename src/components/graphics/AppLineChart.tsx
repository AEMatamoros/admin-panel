import { Line } from "react-chartjs-2";
import { iChart } from "../../interfaces/graphic.interface";

export const AppLineChart = ({ dataChart, optionChart={}}: iChart) => {
  return (
    <div className="m-2 min-w-full">
      <Line data={dataChart} options={optionChart}/>
    </div>
  );
};
