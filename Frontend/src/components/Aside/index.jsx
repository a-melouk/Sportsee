import yoga from "../../assets/yoga.svg";
import swim from "../../assets/swim.svg";
import bicycle from "../../assets/bicycle.svg";
import fitness from "../../assets/fitness.svg";
import "./style.css";

function Aside() {
  return (
    <aside>
      <ul className="aside__nav">
        <li className="icon">
          <img className="icon__img" src={yoga} alt="yoga" />
        </li>
        <li className="icon">
          <img className="icon__img" src={swim} alt="swim" />
        </li>
        <li className="icon">
          <img className="icon__img" src={bicycle} alt="bicycle" />
        </li>
        <li className="icon">
          <img className="icon__img" src={fitness} alt="fitness" />
        </li>
      </ul>
      <span className="aside__text">Copyright, SportSee 2020</span>
    </aside>
  );
}

export default Aside;
