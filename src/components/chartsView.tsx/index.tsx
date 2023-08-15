import React from "react";
import { LineChart } from "./lineChart";
import { PieChart } from "./pieChart";
import { BarRaceChart } from "./barRaceChart";

export const ChartApp = () => {
  return (
    <div>
      <div>
        <LineChart />
      </div>
      <div>
        <PieChart/>
      </div>
      <div>
        <BarRaceChart/>
      </div>
    </div>
  );
};
