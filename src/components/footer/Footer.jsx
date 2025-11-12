import { Component } from "react";
import "./footer.css";

class Footer extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div className="footer-container">
        <div className="link-container">
          <img src="src/assets/images/logo.png" alt="" />
    
          <ul>
            <li>Books</li>
            <li>Mugs</li>
            <li>Bags</li>
            <li>Book accesories</li>
          </ul>
          <ul>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>+994 77 777 77 77</li>
            <li>starstreamstore@gmail.com</li>
          </ul>
        </div>
        <hr />
        <div className="socials-container" style={{display:"flex"}}>

        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-discord"></i>
        <i className="fa-brands fa-tiktok"></i>

        </div>
        <p>© 2024 Star Stream. All Rights Reserved.</p>
      </div>
      
    );
        
    
  }
}

export default Footer;

