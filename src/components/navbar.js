import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About"
import Portfolio from "./portfolio"
import Contact from "./Contact"
import Resume from "./Resume"
const Home = () => {
  return (
    <div>
      <p>Home</p>
    </div>
  );
};

const about = () => {
  return (
    <div>
      <p>About</p>
    </div>
  );
};
const portfolio = () => {
    return (
      <div>
        <p>Portfolio</p>
      </div>
    );
  };

const contact = () => {
  return (
    <div>
      <p>Contact</p>
    </div>
  );
};
const resume = () => {
    return (
      <div>
        <p>My Resume</p>
      </div>
    );
  };
class App extends Component {
  render() {
    return (
        <Router>
              <div>
              <h1>Rohan Nair</h1>
                <nav>
                  <ul>
                    <p>
                      <Link to="/">Home</Link>
                    </p>
                    <p>
                      <Link to="/about">About</Link>
                    </p>
                    <p>
                      <Link to="/portfolio">Portfolio</Link>
                    </p>
                    <p>
                      <Link to="/Contact">Contact Me</Link>
                    </p>
                    <p>
                      <Link to="/Resume"> Resume</Link>
                    </p>
                  </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Resume" component={Resume} />
              </div>
        </Router>
        
    );
  }
}

export default App;