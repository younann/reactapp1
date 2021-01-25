import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Food from './Food';
import { Link } from 'react-router-dom';

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
  color: #d9a21b;
  font-size: 35px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default function Home() {
  const recipesTypes = ['meat', 'chicken', 'fish', 'salmon', 'touffo'];
  return (
    <>
      <Div>
        <H1>Recipes Fantasy</H1>
        <P>
          Welcome to our site where can find a recpices from all over ther
          world.
          <br />
          also you can search it by meat type ,calories,diet type.
          <br />
        </P>
        {recipesTypes.map((name) => {
          return (
            <Card
              style={{
                width: '18rem',
                margin: 20,
                display: '-webkit-inline-flex',
                height: '200px',
              }}
            >
              <Card.Body>
                <Card.Title>{name} Recipes</Card.Title>
                <Card.Text>
                  here you can find any {name} recipes , included all the
                  ingrediants
                </Card.Text>
                <Button variant="primary">
                  <Link to={`/food/${name}`}>View</Link>
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Div>
    </>
  );
}
