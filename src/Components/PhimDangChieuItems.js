import { Button } from "bootstrap";
import React, { Component } from "react";
import "./PhimDangChieuItems.css";
import play from "../Assets/img/play-video.png";
export default class PhimDangChieuItems extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="film">
        <div className="showingDetail">
          <div className="showingFilmPoster">
            <button className="playVideo">
              <img src={play} />
            </button>
            <img src={item.hinhAnh} />
            <div className="showingFilmName">
              <p>
                <span className="age">C18</span>
                {item.tenPhim}
              </p>
              <button className="btn">MUA VÉ</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
