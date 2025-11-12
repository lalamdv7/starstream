import { Component } from "react";
import "./shop.css";
import {connect} from "react-redux"
import { addToBasket } from "../redux/Actions";

class Shop extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(

      <div className="shop-container">
        <h2>STAR STREAM SHOP!</h2>
        <div className="general-container row">

          {this.props.books.map((obj, index)=>(
            <div className="shop-item">
              <img src={obj.img_url} alt="" />
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
              <h3>{obj.name}</h3>
              <p><b>{obj.price}$</b></p>
              <button className="btn" onClick={() => this.props.addToBasket(index)}><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
          ))}   

       </div>
      </div>
    );       
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addToBasket: (index) => {dispatch(addToBasket(index))}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)


