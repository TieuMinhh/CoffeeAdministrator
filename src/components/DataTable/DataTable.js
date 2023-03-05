import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import "./DataTable.scss";

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xác nhận</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Huỷ đơn
            </div>
          </div>
        );
      },
    },
    {
      field: "detail",
      headerName: "Thông tin",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellDetail">
            <Link to="/order/">
              <div className="detail-view">Chi tiết</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-table">
      {/* <div className="data-table-Title">
        Add New User
        <Link to="/users" className="link">
          Add New
        </Link>
      </div> */}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
