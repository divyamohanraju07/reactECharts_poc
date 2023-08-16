import ReactECharts from "echarts-for-react";
import { pieChartOption } from "../../utils/chartsOptionUtils";


export const PieChart = () => {
  return <ReactECharts option={pieChartOption} />;
};
