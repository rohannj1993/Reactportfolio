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
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact Me</Link>
                    </li>
                    <li>
                      <Link to="/Resume"> Resume</Link>
                    </li>
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