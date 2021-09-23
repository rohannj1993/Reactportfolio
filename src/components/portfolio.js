import React from "react"
import Beat from "./Assets/Beat-It.png"
import Brewery from "./Assets/BreweryDog.png"
import Planner from "./Assets/DayPlanner.png"
import Tracker from "./Assets/EmployeeTracker.png"
import NoSql from "./Assets/NoSql.png"
import Component from "./Assets/Component.png"
import {Row} from "reactstrap"
function About() {
    return (
        <div>
        <h1>My Portfolio</h1>
      <p> </p>
      <Row>
    <a href="https://beatit-music-app.herokuapp.com/"><img src={Beat}alt="music" className="logo"/> </a>  
     <a href="https://jconnro.github.io/brewery-dog/"><img src={Brewery}alt="Beer" className="logo"/></a>
      </Row>
      <Row>
     <a href="https://rohannj1993.github.io/DayPlanner//"><img src={Planner}alt="Day Planner" className="logo"/> </a>  
     <a href="https://drive.google.com/file/d/17tvGUahfSxmgcSQcK5L6MFbODpAtREEb/view"> <img src={Tracker}alt="Employee" className="logo"/> </a> 
      </Row>
      <Row>
      <a href="https://drive.google.com/file/d/1ssUssWbApUVfINISk8DhgObUzfuNbFDK/view"><img src={NoSql}alt="NoSql" className="logo"/> </a>  
     <a href="https://component-react.herokuapp.com/"> <img src={Component}alt="Component" className="logo"/> </a> 
      </Row>
      </div>
    )
}
export default About