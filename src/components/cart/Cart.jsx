import { Component } from "react";
import "./cart.css";
import {connect} from "react-redux"
import { deteteItemFromBasket } from "../redux/Actions";

class Cart extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(

      <div className="cart-container">

        <h2>Cart</h2>
        <hr />


          <table className="cart-table">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>

            {this.props.basket.map((obj,index) => (
              <tr>
                <td><button onClick={()=>this.props.deteteItemFromBasket(index)}><i className="fa-regular fa-circle-xmark" style={{color:"gray"}}></i></button></td>
                <td><img src={obj.img_url} alt="" /></td>
                <td>{obj.name}</td>
                <td>
                  <button>-</button>
                  <input 
                    type="number" 
                    min="1" 
                    style={{ width: "40px", textAlign: "center" }}
                  />
                  <button>+</button>
                </td>

                <td>{obj.price}$</td>
              </tr>

            ))}
          </table>
          <div className="cart-total-table">
          <table >
            <tr>
              <th>Cart Totals</th>
              <th></th>
            </tr>

            <tr>
              <td>Total</td>
              <td>{this.props.basket_total_price.toFixed(2)}$</td>
            </tr>
          </table>

          <button className="btn">PROCEED TO CHECKOUT</button>

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
    updateQuantity: (index, quantity) => dispatch(updateQuantity(index, quantity)),
    deteteItemFromBasket: (index) => dispatch(deteteItemFromBasket(index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
