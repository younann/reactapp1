import React from 'react';
import styled from 'styled-components';
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
export default function About() {
  return (
    <>
      <Div>
        <H1>Hello From About Page</H1>
      </Div>
    </>
  );
}
