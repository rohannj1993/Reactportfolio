import React from "react"
function About() {
    return (
        <div>
        <h1>Contact Me</h1>
      <p> My Contact Information</p>
      <div className="contactform">
      <form>
        <div className="contactname">
  <label>
    Name:
    
  </label>
  <input type="text" name="name" className="name" />

</div>

<br/>
<div className="contactemail">
  <label>
    Email Address:
    <input type="text" name="name" className="email" />
  </label>
 


</div>
<br/>
  <label>
    Message:
    <input type="text" name="name" className="message" />
  </label>

</form>
</div>
<input type="submit" value="Submit" />
      </div>
      
    )
}
export default About