import "./homePage.css";
import Slider1 from "../../assets/slider1.jpg";
import Slider2 from "../../assets/slider2.jpg";
import Slider3 from "../../assets/slider3.jpg";
import Slider4 from "../../assets/slider4.jpg";
import Slider5 from "../../assets/slider5.jpg";
import Slider from "../Slider/slider";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { useState } from "react";
function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, url: Slider1 },
    { id: 2, url: Slider2 },
    { id: 3, url: Slider3 },
    { id: 4, url: Slider4 },
    { id: 5, url: Slider5 },
  ];
  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider">
      <h1>Home Page</h1>
      <div className="slider-track">
        {images.map((image) => (
          <Slider
            key={image.id}
            url={image.url}
            className={currentIndex === image.id - 1 ? "active" : "inactive"}
          />
        ))}
      </div>
      <button className="perviosBtn" onClick={handlePreviousClick}>
        {" "}
        <FcPrevious />
      </button>
      <button className="nextBtn" onClick={handleNextClick}>
        <FcNext />
      </button>
    </div>
  );
}

export default HomePage;
