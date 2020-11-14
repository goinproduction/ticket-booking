import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../../Redux/Actions/film";
import Slider from "react-slick";
import PhimDangChieuItems from "../../Components/PhimDangChieuItems";
class PhimDangChieu extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 2,
    };
    return (
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
