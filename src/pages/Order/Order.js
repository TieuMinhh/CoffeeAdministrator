import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
// import DataTable from "../../components/DataTable/DataTable";
import OrderTable from "../../components/OrderTable/OrderTable";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

import "./Order.scss";

const Order = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <div className="title-order">
          <p className="text-title">Các đơn đặt hàng</p>
        </div> */}
        <HeaderTitle title="Tiểu Minh" subtitle="Quản lý đơn hàng" />
        <OrderTable />
      </div>
    </div>
  );
};

export default Order;
