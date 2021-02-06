import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Artist({ id, name, picture }) {
  return (
    <>
      <div className="card-container">
        <Link className="artist-link" to={`/detail/${id}`}>
          <div className="artist-card">
            <h1 key={[id]}>{[name]}</h1>
            <img className="artist-image" src={picture} alt={name} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Artist;
