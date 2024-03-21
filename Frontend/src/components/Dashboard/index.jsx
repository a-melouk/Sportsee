/* eslint-disable react/prop-types */
import "./style.css";
import Macronutriment from "../Macronutriment";
import RadialGraph from "../Charts/RadialGraph";
import LineGraph from "../Charts/LineGraph";
import UserHeader from "../UserHeader";
import BarGraph from "../Charts/BarGraph";
import RadarGraph from "../Charts/RadarGraph";

function Dashboard({
  userInfos,
  userActivity,
  userAverageSessions,
  userPerformance,
}) {
  return (
    <div className="dashboard__container">
      <UserHeader firstName={userInfos.userInfos.firstName} />
      <div className="stats">
        <div className="upper">
          <BarGraph userActivity={userActivity} />
        </div>
        <div className="lower">
          <LineGraph userAverageSessions={userAverageSessions.data} />
          <RadarGraph userPerformance={userPerformance} />
          <RadialGraph score={userInfos.score} />
        </div>
        <div className="macronutriments">
          {userInfos.macronutriments.map((macronutriment) => (
            <Macronutriment
              key={macronutriment.name}
              name={macronutriment.name}
              value={macronutriment.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
