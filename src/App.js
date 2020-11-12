import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Container/Header";
import Carousel from "./Container/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Phim from "./Container/Phim";

function App() {
  return (
    <Router>
      <Header />
      <Carousel />
      <Phim />
      <Switch></Switch>
    </Router>
  );
}

export default App;
