import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Portfolio from "./portfolio"
import Contact from "./Contact"
import Resume from "./Resume"
import Home from "./Home"
// const home = () => {
//   return (
//     <div>
//        <h1>Home</h1>
//     </div>
//   );
// };


// const portfolio = () => {
//     return (
//       <div>
//         <p>Portfolio</p>
//       </div>
//     );
//   };

// const contact = () => {
//   return (
//     <div>
//       <p>Contact</p>
//     </div>
//   );
// };
// const resume = () => {
//     return (
//       <div>
//         <p>My Resume</p>
//       </div>
//     );
//   };
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
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Resume" component={Resume} />
              </div>
        </Router>
        
    );
  }
}

export default App;