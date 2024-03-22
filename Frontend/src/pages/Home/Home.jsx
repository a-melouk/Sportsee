import "./style.css";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Dashboard from "../../components/Dashboard";
import * as api from "../../api/index";
import { useParams } from "react-router-dom";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userInfos, setUserInfo] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [serverError, setServerError] = useState(false);
  const { userId } = useParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const fetchData = async () => {
        try {
          setUserInfo(await api.getUserInfo(userId));
          setUserActivity(await api.getUserActivity(userId));
          setUserAverageSessions(await api.getUserAverageSessions(userId));
          setUserPerformance(await api.getUserPerformance(userId));
          setIsLoaded(true);
        } catch (error) {
          setServerError(true);
        }
      };
      fetchData();
    }
    isFirstRender.current = false;
  }, [userId]);
  return (
    <>
      <Header />
      <Aside />
      {isLoaded ? (
        userInfos && userActivity && userAverageSessions && userPerformance ? (
          <Dashboard
            userInfos={userInfos.data}
            userActivity={userActivity.data}
            userAverageSessions={userAverageSessions}
            userPerformance={userPerformance.data}
          />
        ) : (
          <div className="not-found">
            <p className="not-found__text">Cet utilisateur n&apos;existe pas</p>
          </div>
        )
      ) : serverError ? (
        <div className="not-found">
          <p className="not-found__text">Erreur du serveur</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Home;
