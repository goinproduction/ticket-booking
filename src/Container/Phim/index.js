import React, { Component } from "react";
import PhimDangChieu from "../PhimDangChieu";
import classes from "./style.module.css";
export default class Phim extends Component {
  render() {
    return (
      <div className="container">
        <div className={classes.navCenter}>
          <span className={classes.active}>Đang Chiếu</span>
          <span className={classes.inactive}>Sắp Chiếu</span>
        </div>
        <PhimDangChieu />
      </div>
    );
  }
}
