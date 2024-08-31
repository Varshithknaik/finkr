import { AgGridReact } from 'ag-grid-react';
import { useCallback, useState , useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import useData from '../hooks/useData';

const GridTable = () => {
  const { data , setData , setSelectedData } = useData();
  const [gridApi, setGridApi] = useState(null);

  const onGridReady = useCallback((params) => {
    setGridApi(params.api);

    fetch('/mockData.json')
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, [setData]);

  const columnDefs = useMemo(() => {
    return [
      {
        field: 'GSTR3B Filling Status',
        checkboxSelection: true
      },
      {
        field: '3B Value',
      },
      {
        field: 'Avg Days',
      }
    ];
  },[]);

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
  };

  const onSelectionChanged = () => {
    const selectedData = gridApi.getSelectedRows();
    setSelectedData(selectedData);
  };

  return (
    <div className="grid-container">
      <div className="ag-theme-quartz" style={{ height: '500px', width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={data}
          onGridReady={onGridReady}
          rowSelection={'multiple'}
          onSelectionChanged={onSelectionChanged}
        />
      </div>
    </div>
  );
}

export default GridTable
