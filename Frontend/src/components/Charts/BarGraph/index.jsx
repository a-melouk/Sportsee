import "./style.css";
import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="tooltip__text">{`${payload[0].value}kg`}</p>
        <p className="tooltip__text">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

function BarGraph({ userActivity }) {
  const data = userActivity.map((session) => ({
    date: new Date(session.day).getDate(),
    weight: session.kilogram,
    calories: session.calories,
  }));

  if (!data) return;

  return (
    <div className="barGraph__container">
      <span className="barGraph__title">Activité quotidienne</span>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          barGap={8}
          style={{
            paddingTop: "20px",
            backgroundColor: "#fbfbfb",
          }}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#dedede"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="date"
            tick={{ fill: "#9b9eac", fontSize: "14" }}
            tickLine={false}
            tickSize={16}
            // stroke={"#dedede"}
            scale="point"
            padding={{ left: 15, right: 15 }}
          />

          <YAxis
            dataKey="weight"
            yAxisId={0}
            orientation="right"
            tick={{ fill: "#9b9eac", fontSize: "14" }}
            tickLine={false}
            tickSize={22}
            axisLine={false}
            domain={["dataMin - 5", "dataMax + 5"]}
          />

          <YAxis
            dataKey="calories"
            yAxisId={1}
            hide={true}
            domain={["dataMin-100", "dataMax-100"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            align="right"
            iconType="circle"
            layout="horizontal"
            // style={{ display: "flex", alignItems: "center" }}
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "14px" }}
          />
          <Bar
            activeBar={<Rectangle fill="#282d30" />}
            barSize={10}
            dataKey="weight"
            unit="kg"
            fill="#282d30"
            name="Poids (kg)"
            radius={[10, 10, 0, 0]}
            yAxisId={0}
          />
          <Bar
            activeBar={<Rectangle fill="#e60000" />}
            barSize={10}
            dataKey="calories"
            unit="kCal"
            fill="#e60000"
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]}
            yAxisId={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarGraph.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

export default BarGraph;
