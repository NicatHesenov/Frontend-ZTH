import "./slider.css";

function Slider({ img, className }) {
  return (
    <div className="image-container">
      <img className={className} src={img} alt="" />
    </div>
  );
}

export default Slider;
