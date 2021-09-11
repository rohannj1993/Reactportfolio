import React from 'react';
import gitlogo from "./Assets/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png";
import linkedinlogo from "./Assets/LinkedIn-Logos/LI-Logo.png";
import stacklogo from "./Assets/Stackoverflowlogo.png"
function Footer(){
    return(
<p>
    <a href='https://www.linkedin.com/in/rohan-nair-23b87121b/'>

<img src ={linkedinlogo} id='linkedin' alt="linkedin logo"/>
    </a>
    <a href='https://github.com/rohannj1993'>

 <img src ={gitlogo} alt="github logo"/>
    </a>
    
</p>
    )
}
export default Footer