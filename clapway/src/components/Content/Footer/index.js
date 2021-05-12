import React from 'react'
import "../Footer/style.css"

const Footer = () => {
    return ( 
        <div className="footer-container">
           <div className="first-footer-icon">
           <i class="fas fa-bell"></i>
           </div>
            <div className="copyright">
            <p><i class="fas fa-copyright"></i>All Rights Reserved - clapway.com</p>
            </div>

            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact Us</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Term of Use</a>
            </div>

            <div className="last-footer-icons">
            
            <i class="fas fa-chevron-up"></i>
            </div>
        </div>
     );
}
 
export default Footer;