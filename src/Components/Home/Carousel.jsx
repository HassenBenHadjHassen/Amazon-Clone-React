import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Carousel.css";

import Image1 from "../../images/image1.jpg";
import Image2 from "../../images/image2.jpg";

function CarouselComponent() {
  var items = [
    {
      image: Image1,
    },
    {
      image: Image2,
    },
  ];

  return (
    <Carousel autoPlay indicators={false} swipe={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return <img className="carousel__image" src={item.image} alt="" />;
}

export default CarouselComponent;
