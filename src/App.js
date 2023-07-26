import React, { useState } from "react";
import DataTable from "react-data-table-component";

const SampleDataTable = () => {
  // Dữ liệu của bảng
  const data = [
    { id: 1, name: "John Doe", age: 28, profession: "Engineer" },
    { id: 2, name: "Jane Smith", age: 32, profession: "Designer" },
    { id: 3, name: "Bob Johnson", age: 45, profession: "Manager" }
  ];

  // Các cột của bảng
  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Age", selector: "age", sortable: true },
    { name: "Profession", selector: "profession", sortable: true }
  ];

  const [seletectRows, setSelectedRows] = useState();

  const handleSelectedRowsChange = (rows) => {
    console.log("handleSelectedRowsChange called")
    setSelectedRows(rows.setSelectedRows);
  };

  const defaultSelectedRows = (row) => row.id > 2;

  console.log(seletectRows);

  return (
    <div>
      <h2>Sample Data Table</h2>
      <DataTable
        columns={columns}
        data={data}
        selectableRows={true}
        selectableRowsHighlight
        pagination // Bật phân trang
        highlightOnHover // Highlight dòng khi di chuột qua
        striped // Hiển thị sọc cho từng dòng
        dense // Hiển thị bảng với độ dày cao hơn
        onSelectedRowsChange={handleSelectedRowsChange}
        selectableRowSelected={defaultSelectedRows}
      />
    </div>
  );
};

export default SampleDataTable;
