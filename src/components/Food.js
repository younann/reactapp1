import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

export default function Food() {
  let url =
    'https://api.edamam.com/search?q=chicken&app_id=f863f824&app_key=6da60588219e01d898750757415feb3e&from=0&to=10';
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setRecipe(response.data);
    });
  }, [url]);
  var min = 1;
  var max = 10;
  var rand = Math.floor(min + Math.random() * (max - min));
  console.log(rand);
  if (recipe) {
    return (
      <Div>
        <H1>{recipe.hits[rand].recipe.label}</H1>
        <img
          src={recipe.hits[rand].recipe.image}
          alt={recipe.hits[rand].recipe.label}
        />
        <Div>
          <h3>IngredientLines</h3>
          {recipe.hits[rand].recipe.ingredientLines.map((txt) => (
            <P>{txt}</P>
          ))}
        </Div>
      </Div>
    );
  } else {
    return (
      <Div>
        <H1>Food Page</H1>
      </Div>
    );
  }
}
