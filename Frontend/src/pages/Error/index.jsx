import "./style.css";

function Error() {
  return (
    <div className="error">
      <h1 className="error__heading">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
    </div>
  );
}

export default Error;
