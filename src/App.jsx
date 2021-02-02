import "./App.css";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Artists from "./components/Artists";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";

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
            <Artists />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
