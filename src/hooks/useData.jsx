import { useContext } from "react"
import { dataContext } from "../context/DataProvider"

const useData = () => {
  return useContext(dataContext)
}

export default useData