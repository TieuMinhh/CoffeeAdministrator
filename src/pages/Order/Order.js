import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import DataTable from "../../components/DataTable/DataTable";
import DataTable from "../../components/DataTable/DataTable";

import "./Order.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <div className="title-order">
          <p className="text-title">Các đơn đặt hàng</p>
        </div> */}
        <DataTable />
      </div>
    </div>
  );
};

export default List;
