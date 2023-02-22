import React from "react";
import ".././Style/Home.css";
import carousel1 from "../images/carousel_1.jpg";
import carousel2 from "../images/carousel_2.jpg";
import carousel3 from "../images/carousel_3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="banner">
      <div className="carouselItem">
        <Carousel variant="dark" slide={true}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
              height="450px"
            />
            <Carousel.Caption>
              <h3>
                Choose a job you love, and you will never have to work a day in
                your life
              </h3>
              <p>
                Nothing in the world can take the place of persistence. Talent
                will not; nothing is more common than unsuccessful men with
                talent. Genius will not; unrewarded genius is almost a proverb.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Second slide"
              height="450px"
            />

            <Carousel.Caption>
              <h3>
                The only way to do great work is to love what you do. If you
                haven’t found it yet, keep looking. Don’t settle.
              </h3>
              <p>
                The crowning fortune of a man is to be born to some pursuit
                which finds him employment and happiness, whether it be to make
                baskets, or broadswords, or canals, or statues, or songs.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
              height="450px"
            />

            <Carousel.Caption>
              <h3>
                Achievement is largely the product of steadily raising one’s
                levels of aspirations and expectation
              </h3>
              <p>
                Believe in yourself! Have faith in your abilities! Without a
                humble but reasonable confidence in your own powers you cannot
                be successful or happy.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="applyBtn">
        <button className="ui teal inverted segment jobButton">
          <Link to="/jobs"> Jobs </Link>
        </button>
      </div>
      <div className="bannerLink">
        <div className="ui bannerBottomLink ">
          <button className="ui button bannerButton">
            <Link to="/jobs"> Jobs </Link>
          </button>
          <button className="ui button bannerButton">
            <Link to="/contact"> Contact Us </Link>
          </button>
          <button className="ui button bannerButton">
            <Link to="/"> Coming Soon </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
