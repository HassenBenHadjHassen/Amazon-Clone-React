import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Carousel.css";

function CarouselComponent(props) {
  var items = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61DUO0NqyyL._SX3000_.jpg",
    },
  ];

  return (
    <Carousel autoPlay indicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return <img className="carousel__image" src={props.item.image} alt="" />;
}

export default CarouselComponent;
