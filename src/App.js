import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Food from './components/Food';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/food/:id" component={Food} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
