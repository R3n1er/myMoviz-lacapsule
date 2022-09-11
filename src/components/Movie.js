import React, { useState } from "react";
import "../App.css"; // Import du fichier css

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

// Import des icones FontAwesome dont on à besoin
import { faHeart, faVideo, faStar } from "@fortawesome/free-solid-svg-icons";

// Debut de la fonction return React du composant Movie.js

function Movie(props) {
  // Initialisation d'un hook d'etat pour likeMovie
  const [likeMovie, setLikeMovie] = useState(false);

  // Initialisation d'un hook d'etat pour watchMovie
  const [watchMovie, setWatchMovie] = useState(false);

  // Initialisation d'un etat countWatchMovie
const [countWatchMovie, setCountWatchMovie] = useState(0);

// Initialisation d'une variable d'etat pour le Rating
const [myRatingMovie, setMyRatingMovie] = useState(0);

var setMyRating =(rating) =>{
  if(rating <0){
    rating=0
  }
  if (rating > 0) {
    rating = 10;
  }
  setMyRatingMovie(rating)
}
 
// Afficher le nombre d'etoile en conséquence en fonction du Rating
var tabRating=[];
for(var i=0;i<10;i++){
  var color={};
  if(i<myRatingMovie){
    color= {color: "#f1c40f"}
    tabRating.push(<FontAwesomeIcon style={color} icon={faStar} />)
  }
}

// Définition d'une variable qui incrémente le nombre de vues lors du click sur whatchmovie
var addWatch =() =>{
  setWatchMovie(true)
  setCountWatchMovie(countWatchMovie+1)
}

  // Dynamiser le nombre d'etoiles pour la moyenne
  var tabGlobalRating = [];
  for (var i = 0; i < 10; i++) {
    var color = {};
    if (i < props.globalRating) {
      color = { color: "#e9eb19" }; //Style CSS Inline
    }
    tabGlobalRating.push(<FontAwesomeIcon style={color} icon={faStar} />);
  }
  // Condition if de likeMovie - Change la couleur de l'icone coeur
  if (likeMovie) {
    var colorLike = { color: "#e74c3c", cursor: "pointer" };
  } else {
    var colorLike = { color: "#DDDBF1", cursor: "pointer" };
  }
  // Condition if de watchMovie - Change la couleur de l'icone watch (camera)

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
            Like
            <FontAwesomeIcon
              style={colorLike}
              icon={faHeart}
              onClick={() => setLikeMovie(!likeMovie)} // Déclenchement d'une fonction fleché sur le click du coeur
            />
          </p>
          <p>
            Nombre de vues
            <FontAwesomeIcon
              style={colorWatch}
              icon={faVideo}
              onClick={() => addWatch()}
            />
            {/* //Appeler la fonction addwatch pour mettre a jour le compteur */}
            <Badge color="secondary">{countWatchMovie}</Badge>
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
            {/* // Donner son avis avec l'etat MyRating */}
            <ButtonGroup size="sm">
              <Button
                onClick={() => setMyRatingMovie(myRatingMovie - 1)}
                color="secondary"
              >
                -
              </Button>
              <Button
                onClick={() => setMyRatingMovie(myRatingMovie + 1)}
                color="secondary"
              >
                +
              </Button>
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
