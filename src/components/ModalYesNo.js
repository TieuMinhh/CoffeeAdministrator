import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="me"
      aria-labelledby="contained-modal-title-vcenter"
      top
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Xin lỗi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Ngài không thể tự vô hiệu hoá chính mình</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ShowYesNo() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Chạy
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ShowYesNo;
