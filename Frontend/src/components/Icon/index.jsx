import "./style.css";

function Icon({ image, alt, color }) {
  return (
    <div className="macronutriment__icon" style={{ backgroundColor: color }}>
      <img src={image} alt={alt} />
    </div>
  );
}

export default Icon;
