import { AgCharts } from "ag-charts-react";
import { useEffect, useState } from "react";

const ChartGSTR3B = ({ chartData}) => {
  const [ options , setOptions ] = useState({
    title: { text: " GSTR3B Filling Status VS 3B Value" },
    series: [
      {
        type: "bar",
        xKey: "GSTR3B Filling Status",
        yKey: "3B Value"
      }
    ],
  });

  useEffect(() => {
    setOptions((prev) => ({...prev , data: chartData}))
  }, [chartData]);


  return (
    <div className="charts">
      <AgCharts options={options}/>
    </div>
  )
}

export default ChartGSTR3B