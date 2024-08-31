import { AgCharts } from "ag-charts-react";
import { useEffect, useState } from "react";

const ChartGSTR3B = ({ chartData}) => {
  const [ options , setOptions ] = useState({
    title: { text: " GSTR3B Filling Status VS 3B Value" },
    series: [
      {
        type: "bar",
        xKey: "GSTR3B Filling Status",
        yKey: "3B Value",
        yName: "Ice Cream Sales",
      }
    ],
  });

  useEffect(() => {
    setOptions((prev) => ({...prev , data: chartData}))
  }, [chartData]);


  return (
    <AgCharts options={options}/>
  )
}

export default ChartGSTR3B