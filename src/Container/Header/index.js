import React, { Component } from "react";
import classes from "./style.module.css";
import logo from "../../Assets/img/web-logo.png";
import avatar from "../../Assets/img/avatar.png";
export default class Header extends Component {
  render() {
    return (
      <header id={classes.header}>
        <a href="#" className={classes.logo}>
          <img src={logo} />
        </a>
        <nav className={classes.header__menu}>
          <ul className="mb-0">
            <li>
              <a href="#">Lịch chiếu</a>
            </li>
            <li>
              <a href="#">Cụm rạp</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Ứng dụng</a>
            </li>
          </ul>
        </nav>
        <a href="#" className={classes.signin}>
          <img src={avatar} />
          <span>Đăng nhập</span>
        </a>
      </header>
    );
  }
  componentDidMount() {}
}
