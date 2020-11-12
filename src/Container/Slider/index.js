import React, { Component } from "react";
import Slider from "react-slick";
import { fetchFilms } from "../../Redux/Actions/film";
import { connect } from "react-redux";
import classes from "./style.module.css";
import slide01 from "../../Assets/img/slide01.jpg";
import slide02 from "../../Assets/img/slide02.jpg";
import slide03 from "../../Assets/img/slide03.png";
import slide04 from "../../Assets/img/slide04.png";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "slick-dots slick-thumb",
      arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={slide01} style={{ width: "100%", height: "600px" }} />
          </div>
          <div>
            <img src={slide02} style={{ width: "100%", height: "600px" }} />
          </div>
          <div>
            <img src={slide03} style={{ width: "100%", height: "600px" }} />
          </div>
          <div>
            <img src={slide04} style={{ width: "100%", height: "600px" }} />
          </div>
        </Slider>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchFilms());
  }
}
const mapStateToProps = (state) => ({
  filmList: state.film.films,
});
export default connect(mapStateToProps, null)(Carousel);
