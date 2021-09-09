import React from "react"
function About() {
    return (
        <div>
        <h1>Contact Me</h1>
      <p> My Contact Information</p>
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<form>
  <label>
    Email Address:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<form>
  <label>
    Message:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
      </div>
    )
}
export default About