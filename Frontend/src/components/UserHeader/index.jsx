import PropTypes from "prop-types";
import "./style.css";

function UserHeader({ firstName }) {
  return (
    <header className="user__header">
      <h1>
        Bonjour&nbsp;
        <span className="user__name">{firstName}</span>
      </h1>
      <span className="user__progression">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
    </header>
  );
}

UserHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserHeader;
