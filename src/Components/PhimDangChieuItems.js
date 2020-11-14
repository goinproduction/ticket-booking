import { Button } from "bootstrap";
import React, { Component } from "react";
import classes from "./PhimDangChieuItems.css";
export default class PhimDangChieuItems extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card my-2 mx-2" style={{ height: 450, borderRadius: 5 }}>
        <img
          className="card-img-top"
          src={item.hinhAnh}
          style={{ width: "100%", height: 350, borderRadius: 5 }}
        />
        <div className="card-body hoverInfo">
          <div className={classes.hoverInfo}>
            <p
              className="lead font-weight-bold card-title"
              style={{ fontSize: "15px" }}
            >
              {item.tenPhim}
            </p>

            <p className="lead card-text">
              <small>
                <span className="font-weight-bold" style={{ fontSize: "12px" }}>
                  120 phút
                </span>{" "}
              </small>
            </p>
            <button className="btn">MUA VÉ</button>
          </div>
        </div>
        {/* <Link to={`/detail/${item.maKhoaHoc}`} className="btn btn-success">
          Go to Detail
        </Link> */}
      </div>
    );
  }
}
