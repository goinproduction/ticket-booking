import React, { Component } from "react";
import classes from "./style.module.css";
export default class Phim extends Component {
  render() {
    return (
      <div className="container">
        <div className={classes.navCenter}>
          <div className={classes.active}>
            <span>Đang Chiếu</span>
            <div className={classes.inactive}>
              <span>Sắp Chiếu</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
