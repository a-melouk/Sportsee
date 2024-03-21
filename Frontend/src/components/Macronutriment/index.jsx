import PropTypes from "prop-types";
import Icon from "../Icon";
import "./style.css";
import Calories from "../../assets/calories.svg";
import Proteines from "../../assets/protein.svg";
import Glucides from "../../assets/glucides.svg";
import Lipides from "../../assets/lipides.svg";

const MacronutrimentMap = {
  Calories: {
    name: "Calories",
    image: Calories,
    color: "#fbeaea",
    alt: "Calories",
    unit: "kCal",
  },
  Proteines: {
    name: "Proteines",
    image: Proteines,
    color: "#e9f4fb",
    alt: "Proteines",
    unit: "g",
  },
  Glucides: {
    name: "Glucides",
    image: Glucides,
    color: "#fbf6e5",
    alt: "Glucides",
    unit: "g",
  },
  Lipides: {
    name: "Lipides",
    image: Lipides,
    color: "#fbeaef",
    alt: "Lipides",
    unit: "g",
  },
};

function Macronutriment({ name, value }) {
  return (
    <div className="macronutriment">
      <Icon
        className="macronutriment__icon"
        alt={name}
        color={MacronutrimentMap[name].color}
        image={MacronutrimentMap[name].image}
      />
      <div className="macronutriment__details">
        <p className="macronutriment__value">
          {value} {MacronutrimentMap[name].unit}
        </p>
        <p className="macronutriment__name">{name}</p>
      </div>
    </div>
  );
}

Macronutriment.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string,
};

export default Macronutriment;
