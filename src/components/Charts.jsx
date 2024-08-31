import { useEffect, useState } from "react";
import useData from '../hooks/useData';
import ChartGSTR3B from './ChartGSTR3B';
import ChartGSTRR1 from './ChartGSTRR1';

const Charts = () => {
  const { data , selectedData } = useData();
  const [ chartData , setChartData ] = useState([]);

  useEffect(() => {
    if( selectedData.length > 0 ){
      setChartData(selectedData);
    }else{
      setChartData(data)
    }
  }, [data , selectedData])



  return (
    <div className="chart__container">
      <ChartGSTR3B chartData={chartData} />
      <ChartGSTRR1 chartData={chartData}/>
    </div>
  )
}

export default Charts