// import {useEffect, useState} from "react";
// import adminLayout from "../admin/adminLayout";
// import axios from "../../Api/Api"
// import {Button, Form, Modal} from "react-bootstrap"
// import {toast} from "react-toastify";

// const CategoryPage = () => {

//         const axiosApiInstance = axios.create({});
//         const [load, setLoad] = useState(false);
//         const [list, setList] = useState([]);
//         const [show, setShow] = useState(false);
//         const [form, setForm] = useState();
//         const handleClose = () => setShow(false);
//         const [category_name, setName] = useState();
//         const [id, setID] = useState();
//         const [change, setChange] = useState(false);

//         async function getCategory() {
//             const result = await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + `/api/category/all`)
//             setLoad(true);
//             setList(result?.data)
//         }

//         const handleInfo = (e) => {
//             setForm("edit")
//             setName(e.currentTarget.title)
//             setID(e.currentTarget.id)
//             setShow(true);
//         }
//         const handleShowAdd = (e) => {
//             setName(null)
//             setID(null)
//             setForm("add")
//             setShow(true);
//         }

//         const handleSubmit = async (e) => {
//             e.preventDefault()
//             const payload = {
//                 name: category_name
//             }
//             const query = form === "add" ? await axiosApiInstance.post(axiosApiInstance.defaults.baseURL + `/api/category`, payload) :
//                 await axiosApiInstance.put(axiosApiInstance.defaults.baseURL + `/api/category/update/${id}`, payload)
//             if (query?.data.status === 200)
//                 toast.success(query?.data.message)
//             else
//                 toast.error(query?.data?.message + "! Vui lòng thử lại")
//             setChange(!change)
//             setShow(false)
//         }

//         const handleDelete = async (e) => {
//             const query = await axiosApiInstance.delete(axiosApiInstance.defaults.baseURL + `/api/category/delete/${e.currentTarget.id}`)
//             if (query?.data.status === 200)
//                 toast.success(query?.data.message)
//             else
//                 toast.error(query?.data.message + "! Vui lòng thử lại")
//             setChange(!change)
//         }

//         useEffect(() => {
//             getCategory();

//         }, [change]);
//         return (
//             <>
//                 {
//                     load ?
//                         <div className="d-flex justify-content-center">
//                             <div className="table-container" style={{minWidth: '80%'}}>
//                                 <div className="row">
//                                     <div className="col">
//                                         <h5 className="pb-2 mb-0">Danh sách danh mục</h5>
//                                     </div>
//                                     <div className="col text-right">
//                                         <button className="btn btn-default low-height-btn" onClick={handleShowAdd}>
//                                             <i className="fa fa-plus"></i>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex text-muted overflow-auto center">
//                                     <table className="table">
//                                         <thead>
//                                         <tr>
//                                             <th scope="col" className="col-2">Mã danh mục</th>
//                                             <th scope="col" className="col-3">Tên danh mục</th>
//                                             <th scope="col" className="col-1">Tác vụ</th>
//                                         </tr>
//                                         </thead>
//                                         <tbody>
//                                         {list.map((item) => (
//                                             <tr key={item.id}>
//                                                 <td>{item.id}</td>
//                                                 <td>{item.name}</td>
//                                                 <td style={{whiteSpace: 'nowrap'}}>
//                                                     <button type="button"
//                                                             className="btn btn-outline-warning btn-light btn-sm mx-sm-1 px-lg-2 w-32"
//                                                             title="Chỉnh sửa" id={item.id} title={item.name}
//                                                             onClick={handleInfo}>
//                                                         <i className="fa fa-pencil" aria-hidden="true"></i>
//                                                     </button>

//                                                     <button type="button" id={item.id} title={item.name}
//                                                             onClick={handleDelete}
//                                                             className="btn btn-outline-danger btn-light btn-sm mx-sm-1 px-lg-2 w-32"
//                                                             title="Xóa"><i
//                                                         className="fa fa-times"
//                                                         aria-hidden="true"></i>
//                                                     </button>
//                                                 </td>
//                                             </tr>))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             {
//                                 <Modal show={show} onHide={handleClose}>
//                                     <Modal.Header closeButton>
//                                         <Modal.Title>Danh mục</Modal.Title>
//                                     </Modal.Header>
//                                     <Modal.Body>
//                                         <Form onSubmit={handleSubmit}>
//                                             <Form.Group className="mb-2">
//                                                 <Form.Control type="text" placeholder="Tên danh mục" name="name" required
//                                                               value={category_name}
//                                                               onChange={(e) => setName(e.target.value)}/>
//                                             </Form.Group>
//                                             <Button variant="success" type="submit">
//                                                 {form === "edit" ? "Cập nhật" : "Thêm"}
//                                             </Button>
//                                         </Form>
//                                     </Modal.Body>
//                                     <Modal.Footer>

//                                     </Modal.Footer>
//                                 </Modal>
//                             }
//                         </div>
//                         :
//                         <div>Loading</div>
//                 }
//             </>
//         );
//     }
// ;
// export default adminLayout(CategoryPage);

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Button, Modal } from 'reactstrap';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "react-bootstrap/Table";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Category.scss";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import CategoryImg from "../../components/assets/image/coffee.png";
// import Product from "../Product/Product";
import DetailCategory from "./DetailCategory";
// import { Link } from "@mui/material";
// import CategoryImg1 from "..//Category/Image/2.png";
// import CategoryImg2 from "..//Category/Image/3.png";
// import CategoryImg3 from "..//Category/Image/4.png";

export default function Category() {
  const category = {
    id: "1",
    // image: { CategoryImg },
    kindOf: "Trà sữa",
    quantity: 2,
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <HeaderTitle title="Thanh Khiêm" subtitle="Quản lý danh mục" />
        <div className="content-wrap">
          <div className="container">
            <div className="main-content">
              <button className="button-title">
                <AddCategory />
              </button>
              <Table striped bordered hover size="sm">
                <thead className="Category-inf">
                  <tr>
                    <th>ID</th>
                    <th>Ảnh</th>
                    <th>Loại đồ uống</th>
                    <th>Số lượng</th>

                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody className=" Category-list">
                  <tr>
                    <td>{category.id}</td>

                    <td>{/* <img>{CategoryImg}</img> */}</td>
                    <td>
                      <a href="category/detail">{category.kindOf}</a>
                      {/* <DetailCategory /> */}
                    </td>
                    <td>{category.quantity}</td>

                    <td>
                      <button className="button-edit">
                        <EditCategory />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        <DeleteModal />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      {" "}
                      <img
                        className="img-anh"
                        src={CategoryImg}
                        alt="ảnh"
                      ></img>
                    </td>

                    <td>
                      <a href="category/detail">Cà phê</a>
                    </td>
                    <td>24</td>

                    <td>
                      <button className="button-edit">
                        <EditCategory />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        <DeleteModal />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      {" "}
                      <img
                        className="img-anh"
                        src={CategoryImg}
                        alt="ảnh"
                      ></img>
                    </td>

                    <td>
                      <a href="category/detail">Nước ngọt</a>
                    </td>
                    <td>1302</td>

                    <td>
                      <button className="button-edit">
                        <EditCategory />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        <DeleteModal />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      {" "}
                      <img
                        className="img-anh"
                        src={CategoryImg}
                        alt="ảnh"
                      ></img>
                    </td>

                    <td>
                      <a href="category/detail">Nước suối</a>
                    </td>
                    <td>69</td>

                    <td>
                      <button className="button-edit">
                        <EditCategory />
                      </button>
                    </td>
                    <td>
                      <button className="button-del">
                        <DeleteModal />
                      </button>
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
  const notifyAdd = () => {
    console.log("có chạy mà");
    toast.success("Đã xoá danh mục thành công", {
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
  const doubleTouch = () => {
    setTimeout(notifyAdd, 500);
    setTimeout(handleClose, 3000);
  };
  return (
    <>
      <button className=" btn btn-outline-danger" onClick={handleShow}>
        Xóa
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa danh mục này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="px-3" onClick={doubleTouch}>
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
