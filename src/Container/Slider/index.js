import React, { Component } from "react";
import Slider from "react-slick";
import { fetchFilms } from "../../Redux/Actions/film";
import { connect } from "react-redux";
class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        {/* <Slider {...settings}>
          {this.props.filmList.map((item, index) => {
            return (
              <div>
                <CarouselItem item={item} />
              </div>
            );
          })}
        </Slider> */}
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
