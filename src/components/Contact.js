// import React from "react"
// function Contact() {
//     return (
//         <div>
//         <h1>Contact Me</h1>
//       <p> Please enter your Contact Information</p>
//       <div className="contactform">
//       <form>
//         <div className="contactname">
//   <label>
//     Name:
    
//   </label>
//   <input type="text" name="name" className="name" required />

// </div>

// <br/>
// <div className="contactemail">
//   <label>
//     Email Address: 
//     <input type="text" name="name" className="email" required />
//   </label>
 


// </div>
// <br/>
//   <label>
//     Message:
//     <input type="text" name="name" className="message" required />
//   </label>

// </form>
// </div>
// <button class="submit-btn"type="submit" value="Submit">Submit</button>
//       </div>
      
//     )
// }
// export default Contact

import React from "react";
import emailjs from "emailjs-com";
import {Row, Container} from "reactstrap"
// import { Link } from "react-router-dom";
// import Footer from "../footer"
// import { Container, Row, Col, Form, FormGroup, Jumbotron, Label, Input, Button } from "reactstrap";
// // import { ForgotPasswordReset } from "@unleashit/forgot-password"


export default function Contact () {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_bwvixan', 'template_lm57rei', e.target, 'user_YKKC6dbVH2XXPEU0NbbMn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return(

        
        <div>
            <Container className='contactcontain'>
<Row>
    {/* <img className='officeimg' src="https://www.brunner-group.com/CelumDownloads/85823_tm_stage_Homeoffice_1920x1080_M.jpg" alt='office'/> */}
            <h1 className="contactme please">Contact Me</h1>
            < div className="container">
                <form className="forgot"onSubmit={sendEmail}>

                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto ">
                            <input type="text" className="form-control namecontact" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto ">
                            <input type="email" className="form-control emailcontact" placeholder="Email Address" name="email"/>
                        </div>
                        {/* <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Email Address" name="email"/>
                        </div> */}
                        <div className="col-8 form-group pt-2 mx-auto ">
                            <textarea className="form-control messagecontact" id="forgotmessage" cols="30" rows ="8" placeholder="Message" name="message"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Email"></input>
                        </div>
                    </div>
                </form>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </Row>
            </Container>
        </div>
       
    )
}