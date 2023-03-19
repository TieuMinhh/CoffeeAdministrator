import { DataGrid } from "@mui/x-data-grid";
import { orderRows } from "./OrderTableData";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OrderDetail from "./OrderDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ShowYesNo from "../ModalYesNo";

import "./OrderTable.scss";

const OrderTable = () => {
  // const [data, setData] = useState(orderRows);
  const [data] = useState(orderRows);

  const [show, setShow] = useState(false);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const DeleteUser = () => {
    console.log("Chạy được");
    setShow(true);
  };

  const notifyCancel = () => {
    console.log("có chạy mà");
    toast.success("Ngài đã huỷ đơn hàng thành công", {
      // position: "top-right",
      // autoClose: 3000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "light",
    });
  };
  const notifySubmit = () => {
    console.log("có chạy mà");
    toast.success("Ngài đã xác nhận đơn hàng thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // const orderDetail = () => {
  //   return <OrderDetail />;
  // };

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const doubleFunction = () => {
    setTimeout(notifyCancel, 500);
    setTimeout(handleClose, 3000);
    // setTimeout(() => handleDelete(params.row.id), 1000);
  };

  const renderModal = () => (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Huỷ đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ngài có chắc chắn muốn huỷ đơn hàng này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doubleFunction}>
            Có
            <ToastContainer />
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Không
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  const OrderColumns = [
    { field: "id", headerName: "Mã", width: 10 },
    {
      field: "user",
      headerName: "Tên khách hàng",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "sdt",
      headerName: "Số điện thoại",
      width: 130,
    },

    {
      field: "address",
      headerName: "Địa chỉ",
      width: 170,
    },

    {
      field: "time",
      headerName: "Thời gian đặt",
      width: 160,
    },

    {
      field: "status",
      headerName: "Trạng thái",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={notifySubmit}>
              Xác nhận
            </div>
            <div className="deleteButton" onClick={DeleteUser}>
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
      renderCell: () => {
        return (
          <div className="cellDetail">
            <Link to="/order/">
              <OrderDetail />
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-table">
      {renderModal()}
      {/* <OrderDetail /> */}
      {/* {OrderDetail()} */}
      {/* <div className="data-table-Title">
        Add New User
        <Link to="/users" className="link">
          Add New
        </Link>
      </div> */}
      <DataGrid
        sx={{
          "&.MuiDataGrid-columnsContainer": {
            backgroundColor: "crimson",
          },
        }}
        className="data-grid"
        rows={data}
        columns={OrderColumns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick
        checkboxSelection
        rowHeight={55}
      />
    </div>
  );
};

export default OrderTable;
