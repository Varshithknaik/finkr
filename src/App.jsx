
import './App.css'
import "ag-grid-community/styles/ag-grid.css"; 
import GridTable from './components/GridTable';
import Charts from './components/Charts';

function App() {

  return (
    <div className='dashboard__container'>
      <Charts />
      <GridTable/>
    </div>
  )
}

export default App
