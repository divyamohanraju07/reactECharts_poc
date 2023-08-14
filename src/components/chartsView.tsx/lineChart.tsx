import ReactECharts from "echarts-for-react";
import { lineChartOption } from "../../utils/chartsOptionUtils";


export const LineChart = () => {
  return <ReactECharts option={lineChartOption} />;
};
