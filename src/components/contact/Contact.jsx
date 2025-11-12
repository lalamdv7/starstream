import { Component } from "react";
import "./contact.css";

class Contact extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div className="contact-container">
        <div className="pageee-1">
          <div className="text-box">
            <h2>Welcome to Star Stream!</h2>
            <p>Your haven for books, coffee, and community. Step into a world where stories and flavors come together to create a cozy escape from the everyday. Whether you’re here to find your next favorite book, savor a handcrafted coffee, or simply unwind, Star Stream is a place for you to relax, connect, and be inspired.</p><br />
            <p><i class="fa-solid fa-location-dot" style={{marginRight:"10px"}}></i><b>123 Maple Avenue, Brookside, NY 12345</b></p>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.109227944006!2d2.2919063763056844!3d48.85837007133203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e1!3m2!1sen!2saz!4v1730125626275!5m2!1sen!2saz"></iframe>

          {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}

        </div>

        <div className="form-container">
          <h2>Send Us A Message</h2>
          <form action="">
            <input style={{width:"48%"}} type="text" placeholder="First Name" required/>
            <input style={{width:"48%"}} type="text" placeholder="Last Name" required/>
            <input type="email" name="" id="" placeholder="Your email" />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" placeholder="Message" style={{resize:"none", width:"100%",height:"100px"}}></textarea>
            <button className="btn">Submit</button>
          </form>
        </div>

        <div class="faq-container">
          <h2>Frequently Asked Questions</h2>
  
          <details class="faq-item">
            <summary>What is your return policy?</summary>
            <p>We offer a 30-day return policy with a full refund if the item is unused and in original condition.</p>
          </details>
  
          <details class="faq-item">
            <summary>How long does shipping take?</summary>
            <p>Shipping usually takes 5-7 business days for domestic orders and 10-15 business days for international orders.</p>
          </details>
  
          <details class="faq-item">
            <summary>Do you offer customer support?</summary>
            <p>Yes! Our customer support team is available 24/7 via email and phone.</p>
          </details>

          <details class="faq-item">
            <summary>Can I change my order after it has been placed?</summary>
            <p>Yes, you can change your order within 24 hours of placing it by contacting our customer support team.</p>
          </details>

          <details class="faq-item">
            <summary>Do you ship internationally?</summary>
            <p>Yes, we ship to many countries around the world. Shipping times and costs vary based on your location.</p>
          </details>

          <details class="faq-item">
            <summary>What payment methods do you accept?</summary>
            <p>We accept all major credit cards, PayPal, and bank transfers. For additional payment options, please contact our support team.</p>
          </details>


</div>


      </div>
      
    );
        
    
  }
}

export default Contact;

