import React from "react";
import { Link } from "react-router-dom";

class GameList extends React.Component {
  constructor() {
    super();
    const data = JSON.parse(localStorage.getItem("data"));
    //const data = require('./../data/data.json');
    this.state = {
      data: data,
    };
    //localStorage.setItem('data', JSON.stringify(data));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  /*orderByName = (e) => {
    e.preventDefault();
    const obj = {};
    const games = [
      ...this.state.data.games.sort((a, b) => (a.name > b.name ? 1 : -1)),
    ];
    obj["games"] = games;
    this.setState({
      data: obj,
    });
  };

  orderByYear = (e) => {
    e.preventDefault();
    const obj = {};
    const games = [
      Tri par année, si égale, prend l'ordre alphabétique en compte
      ...this.state.data.games.sort((a, b) =>
        a.year > b.year ? 1 : a.year === b.year && a.name > b.name ? 1 : -1
      ),
    ];
    obj["games"] = games;
    this.setState({
      data: obj,
    });
  };*/

  sortGames = (category, direction = null) => {
    if (category === "reset") {
      const obj = {};
      const games = [
        ...this.state.data.games.sort((a, b) => (a.id > b.id ? 1 : -1)),
      ];
      obj["games"] = games;
      this.setState({
        data: obj,
      });
      return;
    }
    if (category === "alphabet") {
      if (direction === "asc") {
        const obj = {};
        const games = [
          ...this.state.data.games.sort((a, b) => (a.name > b.name ? 1 : -1)),
        ];
        obj["games"] = games;
        this.setState({
          data: obj,
        });
        return;
      } else if (direction === "desc") {
        const obj = {};
        const games = [
          ...this.state.data.games.sort((a, b) => (a.name < b.name ? 1 : -1)),
        ];
        obj["games"] = games;
        this.setState({
          data: obj,
        });
        return;
      }
    }
    if (category === "year") {
      if (direction === "asc") {
        const obj = {};
        const games = [
          ...this.state.data.games.sort((a, b) =>
            a.year > b.year ? 1 : a.year === b.year && a.name > b.name ? 1 : -1
          ),
        ];
        obj["games"] = games;
        this.setState({
          data: obj,
        });
        return;
      } else if (direction === "desc") {
        const obj = {};
        const games = [
          ...this.state.data.games.sort((a, b) =>
            a.year < b.year ? 1 : a.year === b.year && a.name > b.name ? 1 : -1
          ),
        ];
        obj["games"] = games;
        this.setState({
          data: obj,
        });
        return;
      }
    }
    return;
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mb-5 mt-3">Online Games</h1>
        <div className="row justify-content-around mb-5">
          <button
            className="btn btn-success col-2"
            onClick={() => this.sortGames("alphabet", "asc")}
          >
            Trier par ordre alphabétique croissant
          </button>
          <button
            className="btn btn-primary col-2"
            onClick={() => this.sortGames("alphabet", "desc")}
          >
            Trier par ordre alphabétique décroissant
          </button>
          <button
            className="btn btn-success col-2"
            onClick={() => this.sortGames("year", "asc")}
          >
            Trier par date de sortie croissant
          </button>
          <button
            className="btn btn-primary col-2"
            onClick={() => this.sortGames("year", "desc")}
          >
            Trier par date de sortie décroissant
          </button>
          <button
            className="btn btn-danger col-2"
            onClick={() => this.sortGames("reset")}
          >
            Reset le tri
          </button>
        </div>
        <div className="row justify-content-between">
          {this.state.data.games.map((value, index) => {
            return (
              <div className="col-sm-12 col-lg-5 card mb-3" key={index}>
                <img
                  src={`./assets/img/${value.image}`}
                  className="card-img-top"
                  alt=""
                />
                <h3 className="card-title mt-1">{value.name}</h3>
                <p className="card-text">
                  Année de sortie : <b>{value.year}</b>
                </p>
                <p className="card-text">
                  Catégorie : <b>{value.category}</b>
                </p>
                <p className="crad-text">
                  Studio : <b>{value.studio}</b>
                </p>
                <Link to={`/game/${value.id}`}>En savoir plus...</Link>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default GameList;
