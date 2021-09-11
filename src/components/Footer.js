import React from 'react';
import gitlogo from "./Assets/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png";
import linkedinlogo from "./Assets/LinkedIn-Logos/LI-Logo.png"
function Footer(){
    return(
<p>
    <a href='#'>

<img src ={linkedinlogo} id='linkedin' alt="linkedin logo"/>
    </a>
    <a href='#'>

 <img src ={gitlogo} alt="github logo"/>
    </a>
</p>
    )
}
export default Footer