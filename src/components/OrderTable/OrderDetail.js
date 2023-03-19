// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import AvatarImg from "../assets/image/coffee.jpg";

// const OrderDetail = (props) => {
//   const order = {
//     code: "1",
//     image:
//       "https://www.highlandscoffee.com.vn/vnt_upload/product/11_2022/BR_Drink/thumbs/270_crop_HLC__PHINDI_KEM_SUA.jpg",
//     userName: "Xiao Ming",
//     productName: "Cà phê sữa không hành",
//     address: "Hồ Chí Minh",
//     time: "2023-03-10 14:00:00",
//   };

//   const [orderInfo, setOrderInfo] = useState(order);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setOrderInfo({ ...orderInfo, [name]: value });
//   };

//   // const handleSave = () => {
//   //   props.onSave(orderInfo);
//   //   props.onClose();
//   // };

//   const notifyCancel = () => {
//     console.log("có chạy mà");
//     toast.success("Ngài đã huỷ đơn hàng thành công", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };
//   const notifySubmit = () => {
//     console.log("có chạy mà");
//     toast.success("Ngài đã xác nhận đơn hàng thành công", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const doubleFunctionSubmit = () => {
//     setTimeout(notifySubmit, 500);
//     setTimeout(handleClose, 3000);
//     // setTimeout(() => handleDelete(params.row.id), 1000);
//   };

//   const doubleFunctionCancel = () => {
//     setTimeout(notifyCancel, 500);
//     setTimeout(handleClose, 3000);
//     // setTimeout(() => handleDelete(params.row.id), 1000);
//   };

//   return (
//     <>
//       <div variant="primary" className="detail-order" onClick={handleShow}>
//         Chi tiết
//       </div>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title className="btn-title">Thông tin đơn hàng</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="OrderId">
//               <Form.Label>Mã đơn hàng</Form.Label>
//               <Form.Control
//                 className="input-product"
//                 type="text"
//                 name="orderId"
//                 value={orderInfo.code}
//                 onChange={handleInputChange}
//                 disabled
//               />
//             </Form.Group>
//             <Form.Group controlId="OrderProductName">
//               <Form.Label>Tên đồ uống</Form.Label>
//               <Form.Control
//                 className="input-product"
//                 type="text"
//                 name="orderId"
//                 value={orderInfo.productName}
//                 onChange={handleInputChange}
//                 disabled
//               />
//             </Form.Group>
//             <Form.Group controlId="OrderImage">
//               <Form.Label>Ảnh sản phẩm</Form.Label>
//               <img
//                 style={{ width: "150px", height: "150px" }}
//                 src={orderInfo.image}
//                 alt="Order"
//               />
//             </Form.Group>
//             <Form.Group controlId="OrderName">
//               <Form.Label>Tên người đặt</Form.Label>
//               <Form.Control
//                 className="input-product"
//                 type="text"
//                 name="orderName"
//                 value={orderInfo.userName}
//                 onChange={handleInputChange}
//                 disabled
//               />
//             </Form.Group>
//             <Form.Group controlId="OrderAddress">
//               <Form.Label>Địa chỉ</Form.Label>
//               <Form.Control
//                 className="input-product"
//                 type="text"
//                 name="orderAddress"
//                 value={orderInfo.address}
//                 onChange={handleInputChange}
//                 disabled
//               />
//             </Form.Group>
//             <Form.Group controlId="OrderTime">
//               <Form.Label>Thời gian đặt</Form.Label>
//               <Form.Control
//                 className="input-product"
//                 type="text"
//                 name="orderTime"
//                 value={orderInfo.time}
//                 onChange={handleInputChange}
//                 disabled
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={doubleFunctionSubmit}>
//             Xác nhận
//             <ToastContainer />
//           </Button>
//           <Button variant="danger" onClick={doubleFunctionCancel}>
//             Huỷ đơn
//             <ToastContainer />
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default OrderDetail;

import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./OrderTable.scss";

function OrderDetail() {
  const data = [
    { name: "Cà phê sữa không hành", amount: 2, price: "50000" },
    { name: "Cà phê sũa nhiều thuốc bắc", amount: 5, price: "500000" },
    { name: "Trà đào cam sả", amount: 2, price: "40000" },
    { name: "Trà đào cam sả", amount: 2, price: "40000" },
    { name: "Trà đào cam sả", amount: 2, price: "40000" },
    { name: "Trà đào cam sả", amount: 2, price: "40000" },
  ];

  const columns = [
    { dataField: "name", text: "Tên đồ uống", price: "Tên đồ uống" },
    { dataField: "amount", text: "Số lượng" },
    { dataField: "price", text: "Đơn giá" },
  ];

  var totalPrice = 0;

  data.forEach((item) => {
    totalPrice += parseInt(item.price);
  });

  const formatMoney = (money) => {
    if (typeof money !== "number") {
      money = parseInt(money);
    }

    if (isNaN(money)) {
      return "";
    }

    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notifyCancel = () => {
    console.log("có chạy mà");
    toast.success("Ngài đã huỷ đơn hàng thành công", {
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

  const doubleFunctionSubmit = () => {
    setTimeout(notifySubmit, 500);
    setTimeout(handleClose, 3000);
    // setTimeout(() => handleDelete(params.row.id), 1000);
  };

  const doubleFunctionCancel = () => {
    setTimeout(notifyCancel, 500);
    setTimeout(handleClose, 3000);
    // setTimeout(() => handleDelete(params.row.id), 1000);
  };

  return (
    <>
      <div variant="primary" className="detail-order" onClick={handleShow}>
        Chi tiết
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="btn-title">Chi tiết đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            className="react-bootstrap-table"
          />
          <Form.Label className="price-amount">
            Thành tiền :
            <Form.Label className="price-total">
              {formatMoney(totalPrice)}
            </Form.Label>
          </Form.Label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={doubleFunctionSubmit}>
            Xác nhận
            <ToastContainer />
          </Button>
          <Button variant="danger" onClick={doubleFunctionCancel}>
            Huỷ đơn
            <ToastContainer />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderDetail;
