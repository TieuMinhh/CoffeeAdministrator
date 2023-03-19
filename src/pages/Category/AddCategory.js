import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Category.scss";

const AddCategory = ({ onHide }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fileSelectedHandle = (event) => {
    this.setState({
      avatar: {
        ...this.state.avatar.selectedFile,
        selectedFile: event.target.files[0],
      },
    });

    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    this.setState({
      image: file.preview,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPrice("");
    onHide();
  };

  const notifyAdd = () => {
    toast.success("Đã thêm danh mục thành công", {
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
    setTimeout(notifyAdd, 500)
    setTimeout(handleClose,3000)
  }

  return (
    <>
      {/* <Button variant='info' onClick={handleShow}>{title}</Button> */}

      <button className="btn btn-outline-success" onClick={handleShow}>
        Thêm danh mục
      </button>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className="btn-title">Thêm danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                className="input-Category"
                type="text"
                placeholder="Nhập tên danh mục"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formImg">
              <Form.Label>Ảnh</Form.Label>
              <Form.Control
                className="input-Category"
                type="file"
                placeholder="Chọn ảnh danh mục"
                onChange={(event) => fileSelectedHandle(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doubleTouch}>
            Thêm
            <ToastContainer/>
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Huỷ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCategory;
