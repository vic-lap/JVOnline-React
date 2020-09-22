import React from "react";
import "./App.css";
import GameList from "./components/GameList";
import SingleGame from "./components/SingleGame";
import NoMatch from "./components/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={GameList} />
            <Route path="/game/:id" component={SingleGame} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
