import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Button, Modal } from 'reactstrap';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "react-bootstrap/Table";
// import AddProduct from "./AddProduct";
import EditProduct from "./EditCategory";
// import "./Product.scss";
// import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import ProductImg from "../../components/assets/image/coffee.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ProductImg1 from "..//Product/Image/2.png";
// import ProductImg2 from "..//Product/Image/3.png";
// import ProductImg3 from "..//Product/Image/4.png";

export default function DetailCategory() {
  return (
    <div className="list">
      {/* <Sidebar /> */}
      <div className="listContainer">
        {/* <Navbar /> */}
        {/* <div className="title-order">
            <p className="text-title">Các đơn đặt hàng</p>
          </div> */}
        {/* <DataTable /> */}
        {/* <HeaderTitle title="Duy Tân" subtitle="Quản lý sản phẩm" /> */}
        <div className="content-wrapper">
          <div className="container">
            <div className="main-content">
              <button className="button-title">{/* <AddProduct /> */}</button>
              <Table striped bordered hover size="sm">
                <thead className="product-inf">
                  <tr>
                    <th style={{ width: "80px" }}>ID</th>
                    <th>Ảnh 123</th>
                    <th>Tên sản phẩm</th>
                    <th>Tên danh mục</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                    <th>Thông tin</th>
                  </tr>
                </thead>
                <tbody className=" product-list">
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        className="list-images"
                        alt="Product photos"
                        src={ProductImg}
                      />
                    </td>
                    <td>Trà Sữa lúa mạch</td>
                    <td>Trà Sữa</td>
                    <td>20.000</td>
                    <td>Còn bán</td>
                    <td>
                      <button className="button-edit">
                        <EditProduct />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        <DeleteModal />
                      </button>
                    </td>
                    <td className="button-inf">
                      <div className="btn btn-link btn-style">Chi tiết</div>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      <img
                        className="list-images"
                        alt="Product photos"
                        src={ProductImg}
                      />
                    </td>
                    <td>Trà dâu tằm</td>
                    <td>Trà Dâu</td>
                    <td>20.000</td>
                    <td>Còn bán</td>
                    <td>
                      <button className="button-edit">
                        <EditProduct />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        <DeleteModal />
                      </button>
                    </td>
                    <td className="button-inf">
                      <div className="btn btn-link btn-style">Chi tiết</div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        className="list-images"
                        alt="Product photos"
                        src={ProductImg}
                      />
                    </td>
                    <td>Trà Sữa truyền thống</td>
                    <td>Trà Sữa</td>
                    <td>20.000</td>
                    <td>Còn bán</td>
                    <td>
                      <button className="button-edit">
                        <EditProduct />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        {/* <DeleteModal /> */}
                      </button>
                    </td>
                    <td className="button-inf">
                      <div className="btn btn-link btn-style">Chi tiết</div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        className="list-images"
                        alt="Product photos"
                        src={ProductImg}
                      />
                    </td>
                    <td>Trà Sữa trân châu</td>
                    <td>Trà Sữa</td>
                    <td>20.000</td>
                    <td>Còn bán</td>
                    <td>
                      <button className="button-edit">
                        <EditProduct />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        <DeleteModal />
                      </button>
                    </td>
                    <td className="button-inf">
                      <div className="btn btn-link btn-style">Chi tiết</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DeleteModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notifyDelete = () => {
    console.log("có chạy mà");
    toast.success("Ngài đã xoá đồ uống thành công", {
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
  };

  return (
    <>
      <button className=" btn btn-outline-danger" onClick={handleShow}>
        Xóa
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ngài có chắc chắn muốn xóa sản phẩm này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="px-3" onClick={doubleFunction}>
            Có
            <ToastContainer />
          </Button>
          <Button variant="danger" className="px-3" onClick={handleClose}>
            Không
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
