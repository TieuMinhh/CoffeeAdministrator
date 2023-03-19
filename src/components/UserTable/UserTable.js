import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "./UserTableData";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Header from "../../components/Header";
// import { Link } from "react-router-dom";

import "./UserTable.scss";

const UserTable = () => {
  const [data, setData] = useState(userRows);
  const [show, setShow] = useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const DeleteUser = () => {
    console.log("Chạy được");
    setShow(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notifyDelete = () => {
    console.log("có chạy mà");
    toast.success("Ngài đã vô hiệu hoá tài khoản thành công", {
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

  const doubleFunction = () => {
    setTimeout(notifyDelete, 500);
    setTimeout(handleClose, 3000);
    // setTimeout(() => handleDelete(params.row.id), 1000);
  };

  const renderModal = () => (
    <>
      <style type="text/css">
        {`
    .btn-red {
      background-color: crimson;
      color: white;
    }

    .btn-green {
      background-color: #66ff00;
      color: white;
    }

    `}
      </style>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Vô hiệu hoá</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ngài có chắc chắn muốn vô hiệu hoá tài khoản này không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doubleFunction}>
            Có
            <ToastContainer />
          </Button>
          <Button variant="red" onClick={handleClose}>
            Không
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  const UserColumn = [
    { field: "id", headerName: "ID", width: 10 },

    {
      field: "user",
      headerName: "Họ Tên",
      width: 220,
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
      width: 150,
    },

    {
      field: "email",
      headerName: "Email",
      width: 180,
    },

    {
      field: "address",
      headerName: "Địa chỉ",
      width: 200,
    },

    {
      field: "status",
      headerName: "Trạng thái",
      width: 150,
      renderCell: ({ row: { status } }) => {
        return (
          <>
            <div>
              <Box
                width="8px"
                height="8px"
                borderRadius="50%"
                // marginRight="8px"
                backgroundColor={
                  status === "Đang hoạt động" ? "#66ff00" : "crimson"
                }
              >
                {status === "Đang hoạt động" && (
                  <span
                    style={{
                      marginLeft: "16px",
                      position: "relative",
                      bottom: "5.5px",
                    }}
                  >
                    Đang hoạt động
                  </span>
                )}
                {status === "Ngừng hoạt động" && (
                  <span
                    style={{
                      marginLeft: "16px",
                      position: "relative",
                      bottom: "5.5px",
                    }}
                  >
                    Ngừng hoạt động
                  </span>
                )}
              </Box>
            </div>
          </>
          // <div className={`cellWithStatus ${params.row.status}`}>
          //   <div
          //     style={{
          //       width: "10px",
          //       height: "10px",
          //       borderRadius: "50%",
          //       backgroundColor: "#66ff00",
          //     }}
          //   ></div>
          //   {params.row.status}
          // </div>
        );
      },
    },

    // {
    //   field: "action",
    //   headerName: "Hành động",
    //   width: 110,
    //   renderCell: () => {
    //     return (
    //       <div className="cellAction">
    //         <div
    //           className="deleteButton"
    //           // onClick={() => handleDelete(params.row.id)}
    //           onClick={DeleteUser}
    //           // onClick={() => DeleteUser(params)}
    //         >
    //           Vô hiệu hoá
    //         </div>
    //       </div>
    //     );
    //   },
    // },
    // {
    //   field: "detail",
    //   headerName: "Thông tin",
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellDetail">
    //         <Link to="/order">
    //           <div className="detail-view">Chi tiết</div>
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
    {
      field: "accessLevel",
      headerName: "Quyền truy cập",
      width: 150,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="6px"
            backgroundColor={
              access === "admin"
                ? "#66ff00"
                : access === "manager"
                ? "#FFCC00"
                : "#66CCFF"
            }
          >
            {access === "admin" && (
              <AdminPanelSettingsOutlinedIcon style={{ fontSize: "16px" }} />
            )}
            {access === "manager" && (
              <SecurityOutlinedIcon style={{ fontSize: "14px" }} />
            )}
            {access === "user" && (
              <LockOpenOutlinedIcon style={{ fontSize: "15px" }} />
            )}
            <Typography color="#ffffff" fontSize="14px" sx={{ ml: "4px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div className="user-table">
      {renderModal()}
      {/* <div className="data-table-Title">
        <button onClick={DeleteUser}> Add New User</button>
        <Link to="/users" className="link">
          Add New
        </Link>
      </div> */}
      {/* <Button onClick={renderModal()}>Vô hiệu hoá</Button> */}
      <DataGrid
        className="user-grid"
        rows={data}
        columns={UserColumn}
        pageSize={8}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick
        rowHeight={55}
      />
    </div>
  );
};

export default UserTable;
