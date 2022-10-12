/* eslint-disable no-restricted-globals */
import React from "react";
import uuid from "react-uuid";
import CarouselComponent from "./Carousel";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {innerWidth < 1028 ? (
          <div>
            <CarouselComponent />
            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                price={16.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/I/81vvgZqCskL.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="Hooked: How to Build Habit-Forming Products"
                price={15.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51DlnjccG-L._SX322_BO1,204,203,200_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black"
                price={18.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8189uwDnMkL._AC_SL1500_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys - Spill-Resistant Design - Programmable Macro Functionality - Quiet & Cushioned"
                price={39.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71KObIWLtlL._AC_SL1500_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                price={18.78}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="Gaming Chair Office Chair High Back Computer Chair Leather Desk Chair Mesh Ergonomic Adjustable Swivel Task Chair with Headrest and Lumbar Support, 400lb Capacity,Red"
                price={115.99}
                rating={4}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61gmXNWdZML._AC_SL1500_.jpg"
              />
            </div>
          </div>
        ) : (
          <div>
            <CarouselComponent />
            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                price={16.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/I/81vvgZqCskL.jpg"
              />
              <Product
                id={uuid()}
                key={uuid()}
                title="Hooked: How to Build Habit-Forming Products"
                price={15.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51DlnjccG-L._SX322_BO1,204,203,200_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black"
                price={18.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8189uwDnMkL._AC_SL1500_.jpg"
              />
              <Product
                id={uuid()}
                key={uuid()}
                title="Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys - Spill-Resistant Design - Programmable Macro Functionality - Quiet & Cushioned"
                price={39.99}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71KObIWLtlL._AC_SL1500_.jpg"
              />
              <Product
                id={uuid()}
                key={uuid()}
                title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                price={18.78}
                rating={4.5}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id={uuid()}
                key={uuid()}
                title="Gaming Chair Office Chair High Back Computer Chair Leather Desk Chair Mesh Ergonomic Adjustable Swivel Task Chair with Headrest and Lumbar Support, 400lb Capacity,Red"
                price={115.99}
                rating={4}
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61gmXNWdZML._AC_SL1500_.jpg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
