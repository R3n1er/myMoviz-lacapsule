import React from "react";
import '../App.css';

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

    // Dynamiser le nombre d'etoiles
    var tabGlobalRating =[];
        for(var i=0; i<10; i++){
            var color={}
            if(i<props.globalRating){
                color = { color: '#e9eb19' };
            }
            tabGlobalRating.push(
              <FontAwesomeIcon style={color} icon={faStar} />
            );
        }
  return (
    <Col xs="12" lg="6" xl="4">
      <Card style={{marginBottom:30}}>
        <CardImg top src={props.movieImg} alt={props.movieName} />
        <CardBody>
          <p>
            Like <FontAwesomeIcon icon={faHeart} />
          </p>
          <p>
            Nombre de vues <FontAwesomeIcon icon={faVideo} />{" "}
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
