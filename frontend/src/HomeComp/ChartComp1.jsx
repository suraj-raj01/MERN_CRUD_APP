import React from "react";
import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
const ChartComp1 = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const a = 3,
    b = 2,
    c = 1;
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Add", "Modify", "Delete"],
      datasets: [
        {
          data: [a, b, c],
          backgroundColor: [
            documentStyle.getPropertyValue("--green-500"),
            documentStyle.getPropertyValue("--orange-500"),
            documentStyle.getPropertyValue("--red-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--green-400"),
            documentStyle.getPropertyValue("--orange-400"),
            documentStyle.getPropertyValue("--red-400"),
          ],
        },
      ],
    };
    const options = {
      cutout: "35%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <div>
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        style={{ width: "45vh" }}
      />
    </div>
  );
};

export default ChartComp1;
