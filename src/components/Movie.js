import React, { useState } from "react";
import "../App.css";

// Import des composants ReactStrap
import {
  Button,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Badge,
  ButtonGroup,
} from "reactstrap";

// import de FontAwesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import des icondes FontAwesome dont on à besoin
import { faHeart, faVideo, faStar } from "@fortawesome/free-solid-svg-icons";

// Debut de la fonction return React du composant Movie.js

function Movie(props) {
  // Initialisation d'un hook d'etat pour likeMovie
  const [likeMovie, setLikeMovie] = useState(false);
  // Initialisation d'un hook d'etat pour watchMovie
  const [watchMovie, setWatchMovie] = useState(false);

  // Dynamiser le nombre d'etoiles pour la moyenne
  var tabGlobalRating = [];
  for (var i = 0; i < 10; i++) {
    var color = {};
    if (i < props.globalRating) {
      color = { color: "#e9eb19" };
    }
    tabGlobalRating.push(<FontAwesomeIcon style={color} icon={faStar} />);
  }
  // Condition if de likeMovie - Change la couleur de l'icone coeur
  if (likeMovie) {
    var colorLike = { color: "#FFDA22", cursor: "pointer" };
  } else {
    var colorLike = { color: "#DDDBF1", cursor: "pointer" };
  }
  // Condition if de watchMovie - Change la couleur de l'icone watch

if (watchMovie) {
  var colorWatch = { color: "#FFDA22", cursor: "pointer" };
} else {
  var colorWatch = { color: "#DDDBF1", cursor: "pointer" };
}

  return (
    <Col xs="12" lg="6" xl="4">
      <Card style={{ marginBottom: 30 }}>
        <CardImg top src={props.movieImg} alt={props.movieName} />
        <CardBody>
          <p>
            Like{" "}
            <FontAwesomeIcon
              style={colorLike}
              icon={faHeart}
              onClick={() => setLikeMovie(!likeMovie)}
            />
          </p>
          <p>
            Nombre de vues{" "}
            <FontAwesomeIcon
            style={colorWatch}
              icon={faVideo}
              onClick={() => setWatchMovie(!watchMovie)}
            />{" "}
            <Badge color="secondary">2</Badge>
          </p>
          <p>
            Mon avis <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <ButtonGroup size="sm">
              <Button color="secondary">-</Button>
              <Button color="secondary">+</Button>
            </ButtonGroup>
          </p>
          <p>
            Moyenne {tabGlobalRating} ({props.globalCountRating})
          </p>
          <CardTitle>{props.movieName}</CardTitle>
          <CardText>{props.movieDesc}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Movie;
