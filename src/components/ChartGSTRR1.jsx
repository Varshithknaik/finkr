import { AgCharts } from "ag-charts-react";
import { useEffect, useState } from "react";

const ChartGSTRR1 = ({ chartData}) => {
  const [ options , setOptions ] = useState({
    title: { text: " GSTRR1 Filling Status VS R1 Value" },
    data: [],
    series: [
      {
        type: "bar",
        xKey: "GSTRR1 Filling Status",
        yKey: "R1 Value",
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

export default ChartGSTRR1