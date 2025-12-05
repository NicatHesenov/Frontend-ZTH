function Slider({ url, className }) {
  return (
    <div>
      <img src={url} alt="slide" className={className} />
    </div>
  );
}

export default Slider;
