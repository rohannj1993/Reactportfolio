import React from "react"
function Contact() {
    return (
        <div>
        <h1>Contact Me</h1>
      <p> Please enter your Contact Information</p>
      <div className="contactform">
      <form>
        <div className="contactname">
  <label>
    Name:
    
  </label>
  <input type="text" name="name" className="name" required />

</div>

<br/>
<div className="contactemail">
  <label>
    Email Address: 
    <input type="text" name="name" className="email" required />
  </label>
 


</div>
<br/>
  <label>
    Message:
    <input type="text" name="name" className="message" required />
  </label>

</form>
</div>
<button class="submit-btn"type="submit" value="Submit">Submit</button>
      </div>
      
    )
}
export default Contact