import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { connect } from "react-redux";
// import { push } from "connected-react-router";

// import * as actions from "../../store/actions";
import "./Login.scss";
//import { handleLoginApi, createNewUserTest } from "../../services/userService";

import facebookImage from "../../components/assets/image/facebook.png";
import instagramImage from "../../components/assets/image/instagram.png";
import linkedinImage from "../../components/assets/image/linkedin.png";
import twitterImage from "../../components/assets/image/twitter.png";

import { Link } from "react-router-dom";

//import axios from "../../axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowHidePassword: false,
      errMessage: "",
    };
  }

  // async componentDidMount() {
  //   // let res = await axios.get('http://localhost:8081/api/v1/product')
  //   // console.log(res.data.dataProduct);
  // }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  notifySubmit = () => {
    console.log("có chạy mà");
    toast.success("Ngài đã đăng nhập thành công", {
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
  // handleOnClickLogin = async () => {
  //   this.props.userLoginSuccess("helo");
  //   //alert('Hello');
  //   // this.setState({
  //   //     errMessage: ''
  //   // })
  //   // console.log('Username: ', this.state.username, 'Password: ', this.state.password);
  //   // console.log('all state: ', this.state);
  //   // try {
  //   //     let data = await createNewUserTest(this.state.username, this.state.password)
  //   //     console.log('hello', data);
  //   //     if (data && data.error !== 0) {
  //   //         this.setState({
  //   //             errMessage: data.message
  //   //         })
  //   //     }
  //   //     if (data && data.error === 0) {
  //   //         this.props.userLoginSuccess(data.userData)
  //   //         localStorage.setItem('user', data.userData)
  //   //         console.log('login success');
  //   //     }
  //   // } catch (e) {
  //   //     console.log('Loi ne: ', e.response);
  //   //     if (e.response) {
  //   //         if (e.response.data) {
  //   //             this.setState({
  //   //                 errMessage: e.response.data.message
  //   //             })
  //   //         }
  //   //     }
  //   // }
  // };

  // // handleShowHidePassword = () => {
  // //   // alert('Hello')
  // //   this.setState({
  // //     isShowHidePassword: !this.state.isShowHidePassword,
  // //   });
  // };

  render() {
    return (
      <div className="login-page">
        <div className="taskbar-login">
          <div className="taskbar-login-home">
            <a className="logo-home" href="/components/home/home.html">
              {/* <img src="/assets/img/logo.png" style="width:200px"></img> */}
            </a>
            <p className="title-login">Đăng nhập</p>
          </div>
          <a href="https://www.facebook.com/xiaoming4869" class="need-help">
            Bạn cần giúp đỡ?
          </a>
        </div>

        <div className="account-container">
          <div className="form">
            <h2>Đăng Nhập</h2>
            <label>
              <span>Tên Đăng Nhập</span>
              <input
                type="text"
                id="login-name"
                name="name"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              ></input>
            </label>
            <label>
              <span>Mật Khẩu</span>
              <input
                type={this.state.isShowHidePassword ? "password" : "text"}
                id="login-password"
                name="password"
                value={this.state.password}
                onChange={(event) => this.handleOnChangePassword(event)}
              ></input>
              {/* <span onClick={() => this.handleShowHidePassword()}>
                <i
                  className={
                    this.state.isShowHidePassword
                      ? "fa-solid fa-eye"
                      : "fa-solid fa-eye-slash"
                  }
                ></i>
              </span> */}
            </label>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button
                id="login-submit"
                className="submit"
                type="button"
                onClick={this.notifySubmit}
              >
                <ToastContainer />
                Đăng Nhập
              </button>
            </Link>
            <p className="forgot-pass">Quên Mật Khẩu?</p>

            <div className="social-media">
              <p>Hoặc đăng nhập bằng</p>
              <ul>
                <li>
                  {/* <img src={facebookImage} alt="facebook" /> */}
                  <Logo src={facebookImage} alt="facebook"></Logo>
                </li>
                <li>
                  {/* <img src={twitterImage} alt="twitter" /> */}
                  <Logo src={twitterImage} alt="twitter"></Logo>
                </li>
                <li>
                  <Logo src={linkedinImage} alt="linkedin"></Logo>
                  {/* <img src={linkedinImage} alt="linkedin" /> */}
                </li>
                <li>
                  <Logo src={instagramImage} alt="instagram"></Logo>
                  {/* <img src={instagramImage} alt="instagram" /> */}
                </li>
              </ul>
            </div>
          </div>

          <div className="sub-login-container">
            <div className="img">
              <div className="img-text m-up">
                <h2>Có gì mới?</h2>
                <p>Truy cập website để tìm kiếm đồ uống ưa thích đi nào</p>
              </div>
              <div className="img-btn">
                <span className="m-up">Đăng Ký</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     language: state.app.language,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     navigate: (path) => dispatch(push(path)),
//     userLoginFail: () => dispatch(actions.userLoginFail()),
//     userLoginSuccess: (userInfo) =>
//       dispatch(actions.userLoginSuccess(userInfo)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;

const Logo = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
