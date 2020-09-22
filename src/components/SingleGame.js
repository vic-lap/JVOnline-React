import React from "react";
import { Link } from "react-router-dom";

class SingleGame extends React.Component {
  constructor(props) {

    const data = JSON.parse(localStorage.getItem("data"));
    const id = parseInt(this.props.match.params.id, 10);
    const games = data.games;
    const game = games.filter((game) => game.id === id)[0];
    const index = games.indexOf(game);
    this.state = {
      data: data,
      game: game,
      index: index,
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    const newComment = {};
    newComment["user"] = document.getElementById("username").value;
    newComment["comment"] = document.getElementById("comment").value;
    const newData = { ...this.state.data };
    newData.games[this.state.index].comments.push(newComment);
    localStorage.setItem("data", JSON.stringify(newData));
    this.setState({
      data: JSON.parse(localStorage.getItem("data")),
    });
    document.querySelector("form").reset();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.game === undefined) {
      return (
        <React.Fragment>
          <Link to={"/"}>Retour à l'accueil</Link>
          <h1>Erreur</h1>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Link to={"/"}>Retour à l'accueil</Link>
        <h1 className="text-center mb-5 mt-3">{this.state.game.name}</h1>
        <img
          src={`../assets/img/${this.state.game.image}`}
          className="card-img-top"
          alt=""
        />
        <p className="card-text">
          Année de sortie : <b>{this.state.game.year}</b>
        </p>
        <p className="card-text">
          Catégorie : <b>{this.state.game.category}</b>
        </p>
        <p className="crad-text">
          Studio : <b>{this.state.game.studio}</b>
        </p>
        {this.state.game.comments.map((value, index) => {
          return (
            <div className="media mt-3" key={index}>
              <div className="media-body">
                <h5 className="mt-0">{value.user}</h5>
                <p className="mb-0">{value.comment}</p>
              </div>
            </div>
          );
        })}
        <form className="mt-5" onSubmit={this.handleForm}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea className="form-control" id="comment" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SingleGame;
