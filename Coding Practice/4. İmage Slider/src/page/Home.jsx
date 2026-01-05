import Slider from "../components/Slider/Slider";
import "./home.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import pageData from "../pageData/pageData";
import { useState } from "react";
console.log(pageData);

function Home() {
  const [current, setCurrent] = useState(0);

  const length = pageData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="main">
      <h1>Image Slider</h1>
      <div className="slider-container">
        {pageData.map((item, index) => (
          <Slider
            key={item.id}
            img={item.img}
            className={current === index ? "active" : "inactive"}
          />
        ))}
        <div className="btn-container">
          <button className="btn-left" onClick={prevSlide}>
            <FaArrowAltCircleLeft />
          </button>
          <button className="btn-right" onClick={nextSlide}>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
