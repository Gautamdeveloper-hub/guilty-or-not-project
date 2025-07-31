import React from 'react';
import  guilty from '../../Assets/guilty.jpg';
function Footer(){
    return(
<footer className="footer"> 
    <div  className="log">
    <img src={guilty.jpg} alt="Guilty logo"/>
    </div>
</footer>
    );
}
export default Footer;