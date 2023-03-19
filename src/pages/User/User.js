import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
// import DataTable from "../../components/DataTable/DataTable";
import UserTable from "../../components/UserTable/UserTable";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
// import Disable from "../../components/ModalYesNo";

import "./User.scss";

const User = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <div className="title-order">
          <p className="text-title">Các đơn đặt hàng</p>
        </div> */}
        <HeaderTitle title="Tiểu Minh" subtitle="Quản lý tài khoản" />
        {/* <Disable /> */}
        <UserTable />
      </div>
    </div>
  );
};

export default User;
