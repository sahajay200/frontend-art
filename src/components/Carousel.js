import React from "react";


import art1 from "../assets/img/art/ssr.jpeg";
import art2 from "../assets/img/art/Watermarked_Shark.JPG"; 
import art3 from "../assets/img/art/suveer2.jpeg";
import art4 from "../assets/img/art/indiaAK.png";
import art5 from "../assets/img/art/kobe.jpeg";
import art6 from "../assets/img/art/sunset.JPG";
import art7 from "../assets/img/art/ganeshislam.png";



// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  // {
  //   src:
  //     "data:/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925835%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925835%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.45%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  //   altText: "Slide 1",
  //   caption: ""
  // },
  {
    src: art1,
    altText: "Slide 1",
    caption: ""
  },
  {
    src: art2,
    altText: "Slide 2",
    caption: ""
  },
  {
    src: art3,
    altText: "Slide 3",
    caption: ""
  },
  {
    src: art4,
    altText: "Slide 4",
    caption: ""
  },
  {
    src: art5,
    altText: "Slide 5",
    caption: ""
  },
  {
    src: art6,
    altText: "Slide 6",
    caption: ""
  },
  {
    src: art7,
    altText: "Slide 7",
    caption: ""
  }
];

function Carousel(){
  return (
    <>
      <UncontrolledCarousel className="portfolio-images" items={carouselItems} />
    </>
  );
}

export default Carousel;