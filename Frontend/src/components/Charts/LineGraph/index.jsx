import "./style.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const CustomCursor = (props) => {
  const { points, height } = props;
  const x = points[0].x;

  return (
    <Rectangle
      fill="#e60000"
      stroke="#e60000"
      x={x}
      y={0}
      width={38}
      height={height}
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
    })
  ),
  height: PropTypes.number,
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { value } = payload[0];
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: "white", width: 39, height: 25 }}
      >
        <p>{`${value} min`}</p>
      </div>
    );
  }

  return null;
};

function LineGraph({ userAverageSessions }) {
  return (
    <div className="lineGraph__container">
      <span className="lineGraph__title">Durée moyenne des sessions</span>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userAverageSessions}
          margin={{
            // top: 5,
            // bottom: 5,
            left: 15,
            right: 15,
          }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={(value) => value.charAt(0)}
            axisLine={false}
            tickLine={false}
            // padding={{ top: 10, bottom: 10 }}
            tick={{ fill: "#fff", opacity: "0.5" }}
          />
          <YAxis hide />

          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <defs>
            <linearGradient id="lineStroke" x1="1" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="#D8D8D8" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#D8D8D8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineStroke)"
            strokeWidth={3}
            dot={{ r: 0 }}
            activeDot={{ r: 4, fill: "#fff", stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineGraph.propTypes = {
  userAverageSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ),
};

export default LineGraph;
