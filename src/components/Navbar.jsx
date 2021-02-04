import { BrowserRouter as Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="list-container">
          <ul className="navbar-list-menu">
            <Link to="/artists" className="link"><li>Artists</li></Link>
            <div className="title-container">
            <Link to="/" className="home-link"><h1>smART</h1></Link>
            </div>
            <Link to="/works" className="link"><li>Works</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
