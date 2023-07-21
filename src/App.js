import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useRef, useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const App = () => {
    const gridRef = useRef();
    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);
    
    const [columnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ]);

    const autoSizeAll = useCallback(() => { 
      const allColumnIds = []; 
      gridRef.current.columnApi.getColumns().forEach((column) => { allColumnIds.push(column.colId); }); 
      gridRef.current.columnApi.autoSizeColumns(allColumnIds); 
      var params = {
        force: true,
      };
      gridRef.current.api.refreshCells(params);
  
  }, []);

  const generateRandomData = () => {
    setRowData([
      {make: "Toyota", model: makeid(Math.floor(Math.random() * 36) + 5), price: 35000},
      {make: "Ford", model: makeid(Math.floor(Math.random() * 36) + 5), price: 32000},
      {make: "Porsche", model: makeid(Math.floor(Math.random() * 36) + 5), price: 72000}
    ])
  }

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                onRowDataUpdated={autoSizeAll}>
            </AgGridReact>

            <button onClick={generateRandomData}>Get Data</button>
        </div>
    );
};

export default App;