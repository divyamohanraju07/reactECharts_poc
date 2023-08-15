import ReactECharts from "echarts-for-react";
import { barRaceChartOption } from "../../utils/chartsOptionUtils";


export const BarRaceChart = () => {
  return <ReactECharts option={barRaceChartOption} />;
};
