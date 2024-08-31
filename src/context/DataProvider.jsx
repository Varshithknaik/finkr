import { createContext , useState } from "react";

export const dataContext = createContext()

const DataProvider = ({children}) => {
  const [ data , setData ] = useState([]);
  const [ selectedData , setSelectedData ] = useState([]);
  return (
    <dataContext.Provider value={{data, setData, selectedData, setSelectedData}}>
      {children}
    </dataContext.Provider>
  )
}

export default DataProvider;
