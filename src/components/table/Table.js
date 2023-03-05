import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Cafe sữa không để sữa",
      img: "https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/12/gourmet-guide-3_resize.jpg",
      customer: "小 明 先 生",
      date: "29-02",
      amount: 20,
      method: "Tiền mặt nhưng bị rách",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Cà phê đá nóng hổi",
      img: "https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/12/gourmet-guide-3_resize.jpg",
      customer: "黄 青 风",
      date: "50",
      amount: 900,
      method: "Thiếu nợ hứa mai trả",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Trà xanh tươi như nụ cười của anh",
      img: "https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/12/gourmet-guide-3_resize.jpg",
      customer: "鞠 婧 祎",
      date: "31-6",
      amount: 300,
      method: "Tiền mặt",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Cafe vị Cocacola",
      img: "https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/12/gourmet-guide-3_resize.jpg",
      customer: "吴 维 新",
      date: "31-11",
      amount: 1000,
      method: "Không có tiền nhưng vẫn đặt đồ uống",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Cafe không hành ",
      img: "https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/12/gourmet-guide-3_resize.jpg",
      customer: "陈 青 谦",
      date: "30-2",
      amount: 2000,
      method: "Đặt cho vui chứ không nhận",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Tên đồ uống</TableCell>
            <TableCell className="tableCell">Khách hàng</TableCell>
            <TableCell className="tableCell">Ngày đặt</TableCell>
            <TableCell className="tableCell">Số lượng</TableCell>
            <TableCell className="tableCell">Phương thức thanh toán</TableCell>
            <TableCell className="tableCell">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount} cốc</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
