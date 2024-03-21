import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "./style.css";

function RadarGraph({ userPerformance }) {
  return (
    <div className="radarGraph__container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={userPerformance}
          margin={{
            top: 12,
            right: 12,
            left: 12,
            bottom: 12,
          }}
        >
          <PolarGrid fill="white" stroke="white" radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "white" }} />
          <Radar dataKey="value" fill="#ff0101b3" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarGraph.propTypes = {
  userPerformance: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};
export default RadarGraph;
