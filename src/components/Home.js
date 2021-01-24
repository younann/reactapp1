import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
          <h1>Home Page</h1>
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
    </Container>
  );
}
