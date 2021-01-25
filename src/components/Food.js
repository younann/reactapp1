import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ListGroup, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Div = styled.div`
  text-align: center;
  background: #4c4f57;
  height: 100vh;
`;

const H1 = styled.h1`
  color: #e1f1ff;
  font-family: fantasy;
  font-size: 5rem;
  &:hover {
    color: #d9a21b;
  }
`;

const P = styled.p`
  color: white;
  font-size: 25px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;
const H3 = styled.h3`
  color: #d9a21b;
  margin: 1rem;
`;

export default function Food() {
  const { id } = useParams();
  let url = `https://api.edamam.com/search?q=${id}&app_id=f863f824&app_key=6da60588219e01d898750757415feb3e&from=0&to=100`;
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setRecipe(response.data);
    });
  }, [url]);
  var min = 1;
  var max = 100;
  var rand = Math.floor(min + Math.random() * (max - min));

  if (recipe) {
    return (
      <Div>
        <H1>{recipe.hits[rand].recipe.label}</H1>
        <img
          src={recipe.hits[rand].recipe.image}
          alt={recipe.hits[rand].recipe.label}
        />
        <Div>
          <H3>Ingredients</H3>

          <ListGroup variant="">
            {recipe.hits[rand].recipe.ingredientLines.map((txt) => (
              <ListGroup.Item>{txt}</ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            onClick={() => {
              window.location.reload(false);
            }}
          >
            New Recipe
          </Button>
        </Div>
      </Div>
    );
  } else {
    return (
      <Div>
        <H1>Loading</H1>
        <Spinner animation="border" variant="secondary" size="sm" />
      </Div>
    );
  }
}
