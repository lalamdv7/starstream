import { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./layout.css";
import logo from "../../assets/images/logo.png";
import {connect} from "react-redux"

class Layout extends Component {

  render() {

    return (
      <>
        <nav className="navigation-bar">
          <div className="img-container">
            <Link to="/"><img src={logo} alt="Logo" /></Link>             
          </div>
          <ul>                                 
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><p>{this.props.basket.length}</p></Link>
            </li>
          </ul>
        </nav>

        <Outlet />

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

