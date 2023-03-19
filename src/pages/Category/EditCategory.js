// import { height } from "@mui/system";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import CategoryImg from "../../components/assets/image/coffee.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Category.scss";

const EditCategory = ({ onHide }) => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [detail, setDetail] = useState("");
  // const [status, setStatus] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const fileSelectedHandle = (event) => {
  //   this.setState({
  //     avatar: {
  //       ...this.state.avatar.selectedFile,
  //       selectedFile: event.target.files[0],
  //     },
  //   });

  //   const file = event.target.files[0];
  //   file.preview = URL.createObjectURL(file);
  //   this.setState({
  //     image: file.preview,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setName("");
    // setPrice("");
    onHide();
  };
  // export default function Category() {

  const notifyAdd = () => {
    console.log("có chạy mà");
    toast.success("Đã sửa danh mục thành công", {
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
      {/* <Button variant='info' onClick={handleShow}>{title}</Button> */}

      <button className="btn btn-outline-success" onClick={handleShow}>
        Sửa
      </button>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className="btn-title">Sửa danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                className="input-category"
                type="text"
                placeholder="Nhập tên danh mục"
                value={"Giọt lệ đài trang"}
                // onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formImg">
              <Form.Label>Ảnh</Form.Label>
              {/* <Form.Control
                className="input-category"
                type="file"
                placeholder="Chọn ảnh dồ uống"
                onChange={(event) => fileSelectedHandle(event)}
              /> */}
              <img className="anh-sua" src={CategoryImg} alt="ảnh" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doubleTouch}>
            Cập nhật
            <ToastContainer />
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Huỷ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditCategory;
