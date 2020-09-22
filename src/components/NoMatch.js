import React from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Link to={"/"}>Retour à l'accueil</Link>
        <h1>Erreur 404</h1>
      </React.Fragment>
    );
  }
}

export default NoMatch;