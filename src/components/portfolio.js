import React from "react"
import Beat from "./Assets/Beat-It.png"
import Brewery from "./Assets/BreweryDog.png"
import {Row} from "reactstrap"
function About() {
    return (
        <div>
        <h1>My Portfolio</h1>
      <p> Portfolio projects</p>
      <Row>
    <a href="https://beatit-music-app.herokuapp.com/"><img src={Beat}alt="music" className="musiclogo"/> </a>  
      <img src={Brewery}alt="Beer" className="beerlogo"/>
      </Row>
      </div>
    )
}
export default About