import React from "react"
import me from "./Assets/classpic.jpg"
function Home (){
return(
  <div>
   <h2>Rohan Nair</h2>
   <h2>About Me </h2>
   <img class="headshot"src ={me} alt="me"/>
  
   <p> 
   Currently a student at Rutgers Coding Bootcamp, looking to obtain a entry level Web Development position.
   </p>

 </div>
)

}

export default Home