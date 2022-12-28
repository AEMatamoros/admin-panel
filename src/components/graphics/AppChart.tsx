import { Chart } from "react-chartjs-2";
import { iChartGeneral } from "../../interfaces/graphic.interface";


const AppChart = (propChart: iChartGeneral) => {
  return (
    <div className="text-center">
      <h3>{propChart.title}</h3>
      <Chart {...propChart} />
    </div>
  );
};

export default AppChart;
