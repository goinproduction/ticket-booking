import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../../Redux/Actions/film";
import Slider from "react-slick";
import PhimDangChieuItems from "../../Components/PhimDangChieuItems";
class PhimDangChieu extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
    };
    return (
      // <Slider {...settings}>
      //   <div className="row">
      //     {this.props.filmList.map((item, index) => {
      //       return (
      //         <div className="col-md-3" key={index}>
      //           <PhimDangChieuItems item={item} />
      //         </div>
      //       );
      //     })}
      //   </div>
      // </Slider>
      <Slider {...settings}>
        {this.props.filmList.map((item, index) => {
          return (
            <div key={index}>
              <PhimDangChieuItems item={item} />
            </div>
          );
        })}
      </Slider>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchFilms());
  }
}
const mapStateToProps = (state) => ({
  filmList: state.film.films,
});
export default connect(mapStateToProps, null)(PhimDangChieu);
