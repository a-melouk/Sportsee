import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import "./style.css";

import PropTypes from "prop-types";

function RadialGraph({ score }) {
  const data = [{ name: "Score", score: score, fill: "#ff0101" }];

  return (
    <div className="radialGraph__container">
      <span className="radialGraph__title">Score</span>
      <div className="radialGraph__score">
        <p className="radialGraph__score__text" style={{ zIndex: 5 }}>
          <span className="radialGraph__score__text__value">{`${score}%`}</span>{" "}
          de votre objectif
        </p>
      </div>

      <ResponsiveContainer
        width="90%"
        height="90%"
        style={{ zIndex: 5 }}
        id="radial_graph"
      >
        <RadialBarChart
          barSize={10}
          data={data}
          innerRadius="80%"
          outerRadius="90%"
          startAngle={450}
          endAngle={90}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <PolarAngleAxis type="number" tick={false} domain={[0, 100]} />
          <RadialBar dataKey="score" cornerRadius="50%" fill="#ff0101" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadialGraph.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RadialGraph;
