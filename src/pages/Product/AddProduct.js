import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.scss";

const AddProduct = ({ onHide }) => {
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
    console.log("có chạy mà");
    toast.success("Ngài đã thêm đồ uống thành công", {
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
    setTimeout(notifyAdd, 500);
    setTimeout(handleClose, 3000);
  };

  return (
    <>
      {/* <Button variant='info' onClick={handleShow}>{title}</Button> */}

      <button className="btn btn-outline-success" onClick={handleShow}>
        Thêm đồ uống
      </button>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className="btn-title">Thêm đồ uống</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                className="input-product"
                type="text"
                placeholder="Nhập tên đồ uống"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Danh mục</Form.Label>
              <Form.Control
                as="select"
                className="input-product"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Trà sữa</option>
                <option>Cà phê</option>
                <option>Nước suối</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                className="input-product"
                type="number"
                placeholder="Nhập giá đồ uống"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDetail">
              <Form.Label>Thông tin chi tiết</Form.Label>
              <Form.Control
                className="input-product"
                // type="text"
                as="textarea"
                rows={3}
                placeholder="Nhập thông tin chi tiết"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Trạng thái</Form.Label>
              {/* <Form.Control
                as="select"
                className="input-product"
                value={status}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Còn bán</option>
                <option>Hết bán</option>
              </Form.Control> */}
              <div value={status} onChange={(e) => setStatus(e.target.value)}>
                <Form.Check
                  inline
                  type="radio"
                  name="status"
                  label="Còn hàng"
                  id="con-hang"
                  shape="circle"
                />

                <Form.Check
                  inline
                  type="radio"
                  name="status"
                  label="Hết hàng"
                  id="het-hang"
                  shape="circle"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label>Ảnh</Form.Label>
              <Form.Control
                className="input-product"
                type="file"
                placeholder="Chọn ảnh dồ uống"
                onChange={(event) => fileSelectedHandle(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doubleFunction}>
            Thêm
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

export default AddProduct;
