import React from "react";
import "./Sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
//import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FaLaughBeam, FaSignOutAlt } from "react-icons/fa";
import { HiHome, HiCube, HiShoppingCart, HiUsers, HiCog } from "react-icons/hi";
import { HiCircleStack } from "react-icons/hi2";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import AvatarImg from "../assets/image/avatar.jpg";
// import Disable from "../ModalYesNo";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <FaLaughBeam className="smile-icon"></FaLaughBeam>
          <span className="logo">Café Administrator</span>
        </Link>
      </div>
      <hr />
      <Box mb="10px" mt="10px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="90px"
            height="90px"
            src={AvatarImg}
            style={{ cursor: "pointer", borderRadius: "5%" }}
          />
        </Box>
        <Box textAlign="center" mt="8px" mb="8px">
          <Typography
            variant="h2"
            // color={colors.grey[100]}
            fontWeight="bold"
            fontSize="20px"
            sx={{ m: "6px 0 0 0" }}
          >
            小 明 先 生
          </Typography>
          <Typography variant="h5" color="#342E37" fontSize="20px" mt="8px">
            Administrator
          </Typography>
        </Box>
      </Box>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <HiHome className="icon"></HiHome>
              <span>Trang chủ</span>
            </li>
          </Link>

          <hr />

          <p className="title">QUẢN LÝ</p>
          <Link to="/category" style={{ textDecoration: "none" }}>
            <li>
              <HiCircleStack className="icon"></HiCircleStack>
              <span>Quản lý danh mục</span>
            </li>
          </Link>

          <Link to="/product" style={{ textDecoration: "none" }}>
            <li>
              <HiCube className="icon"></HiCube>
              <span>Quản lý sản phẩm</span>
            </li>
          </Link>

          <Link to="/order" style={{ textDecoration: "none" }}>
            <li>
              <HiShoppingCart className="icon"></HiShoppingCart>
              <span>Quản lý đơn hàng</span>
            </li>
          </Link>

          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <HiUsers className="icon"></HiUsers>
              <span>Quản lý tài khoản</span>
            </li>
          </Link>

          <hr />

          <p className="title">TÍNH NĂNG</p>
          <Link to="/setting" style={{ textDecoration: "none" }}>
            <li>
              <HiCog className="icon"></HiCog>
              <span>Cài đặt</span>
            </li>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <FaSignOutAlt className="icon"></FaSignOutAlt>
              <span>Đăng xuất</span>
            </li>
          </Link>

          {/* <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>

      <hr />

      {/* <Disable /> */}
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}

      <hr />
    </div>
  );
};

export default Sidebar;
