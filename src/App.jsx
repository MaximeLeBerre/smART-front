import "./App.css";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import ArtistsList from "./components/ArtistsList";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import ArtistDetails from "./components/ArtistDetails";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/artists">
              <ArtistsList />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/detail/:id">
              <ArtistDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
