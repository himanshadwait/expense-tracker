import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  // Access the dataPoints received from ExpenseChart and store the expenseAmount in
  // an Array and extract the Maximum amount from it.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      {/* Send Chart data to ChartBar but why do we need a key? */}
      {/* Why do we use { } inside JSX code again? */}
    </div>
  );
};

export default Chart;
