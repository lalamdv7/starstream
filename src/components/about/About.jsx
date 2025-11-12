import { Component } from "react";
import "./about.css";

class About extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(

      <div className="about-container">
        <div className="pagee-1">
          <p>-Since 2019-</p>
          <h2>What We Provide: Books, Coffee, and a Space to Unwind</h2>
          <p style={{fontSize:"2rem", lineHeight:"1.5", padding:"0 30px"}}>At Star Stream, we’re more than just a bookstore. We offer a curated selection of books across genres, freshly brewed coffee to savor with every chapter, and a cozy space designed for you to relax, read, and connect. Whether you're looking for your next great read, a quiet corner to enjoy a latte, or a community of fellow book lovers, Star Stream has it all. Come for the books, stay for the atmosphere!</p>
          <button className="btn">&gt;&gt;EXPLORE MORE</button>

          <hr />

          <div className="information-container row">
            <div className="text-box col-4">
              <h2>Who We Are</h2>
              <p>Star Stream is a unique blend of bookstore and coffee shop, designed for those who find joy in a good book and a great brew. We’re passionate about creating a space where readers, coffee lovers, and community members can gather, connect, and unwind. With hand-selected titles and artisan coffee, we strive to offer an experience as satisfying as a page-turning novel.</p>
            </div>

            <div className="text-box col-4">
              <h2>How It Started</h2>
              <p>Star Stream began with a simple love for stories and the cozy atmosphere that a coffee shop brings. Our founders wanted to combine these two beloved worlds into one space that celebrates both books and community. From a small dream to a vibrant hub, Star Stream has grown with the support of readers and coffee enthusiasts like you.</p>
            </div>

            <div className="text-box col-4">
              <h2>Why Choose Us</h2>
              <p>At Star Stream, we believe in the magic of slowing down with a good book and a fresh cup of coffee. Our knowledgeable staff, personalized book recommendations, and cozy ambiance make us a step above your typical bookstore or café. We’re not just a place to buy books or coffee; we’re a destination for inspiration, relaxation, and community connection.</p>
            </div>

          </div>
        </div>

        <div className="pagee-2">
          <div className="left-container">
            <h2>How It Works</h2>
            <p><b>In-Store:</b> Browse our curated selection of books, enjoy a handcrafted coffee, and find a quiet spot to read.</p>
            <p><b>Online:</b> Prefer shopping from home? Our online store lets you browse and order books to enjoy anywhere.</p>
            <p><b>Community Events:</b> Check our events calendar for book clubs, author signings, and community gatherings to connect with other book lovers.</p>
          </div>

          <img src="https://img.freepik.com/free-photo/smiling-student-reading-book_1149-1039.jpg" alt="" />
        </div>

        <div className="menu-container">
          <h2>Star Stream Cafe Menu</h2>
          <hr />
          <div className="link-container">
            <a href="#coffee_div">Coffees</a>
            <a href="#sweet_div">Pastries</a>
          </div>
          <hr />

          <div className="coffees-container" id="coffee_div">
            <h3>Coffees</h3>

            <div className="coffee-container">
              <img src="https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg" alt="Latte" />
              <div className="text-container">
                <h4>Latte</h4>
                <p>$10</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg" alt="Cappuccino" />
              <div className="text-container">
                <h4>Cappuccino</h4>
                <p>$8</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://victorallen.com/cdn/shop/articles/gerson-cifuentes-JNhaaPEz3FY-unsplash.jpg?v=1576872775" alt="Americano" />
              <div className="text-container">
                <h4>Americano</h4>
                <p>$7</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://coffeegeek.com/wp-content/uploads/2019/09/espressohowto-11.jpg" alt="Espresso" />
              <div className="text-container">
                <h4>Espresso</h4>
                <p>$5</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://www.thespruceeats.com/thmb/POPhcPYBWx7fNJu8Bc7YjS-Flso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mocha-4797918-hero-01-1-f8fb7ebd74914895b61366f6fc1d4b05.jpg" alt="Mocha" />
              <div className="text-container">
                <h4>Mocha</h4>
                <p>$9</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://static.toiimg.com/thumb/86699095.cms?width=1200&height=900" alt="Flat White" />
              <div className="text-container">
                <h4>Flat White</h4>
                <p>$8</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://www.imperialsugar.com/sites/default/files/recipe/Caramel-Macchiato-imperial.jpg" alt="Macchiato" />
              <div className="text-container">
                <h4>Macchiato</h4>
                <p>$9</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://www.foodandwine.com/thmb/TNVoBB4XaCn6zBdeCCrwmRRZE-M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Why-Irish-Coffee-Should-Replace-The-Espresso-Martini-FT-BLOG0922-2000-0c1acd57e2f54aaeb41aecd1e0885dd3.jpg" alt="Irish Coffee" />
              <div className="text-container">
                <h4>Irish Coffee</h4>
                <p>$12</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://daniliciousdishes.com/wp-content/uploads/2020/05/Homemade-Cold-Brew-Coffee-1-2.jpg" alt="Cold Brew" />
              <div className="text-container">
                <h4>Cold Brew</h4>
                <p>$6</p>
              </div>
            </div>

            <div className="coffee-container">
              <img src="https://www.thespruceeats.com/thmb/5PcCBEaUd1U1eFxfcKKPLVnZzfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/affogato-4776668-hero-08-40d7a68d12ba46f48eaea3c43aba715c.jpg" alt="Affogato" />
              <div className="text-container">
                <h4>Affogato</h4>
                <p>$11</p>
              </div>
            </div>


          </div>

          <div className="sweets-container" id="sweet_div">

            <h3>Pastries</h3>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/1663927307890tufcb27w42q.jpg" alt="Latte" />
              <div className="text-container">
                <h4>Plain Croissant</h4>
                <p>$4</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/1663927680952bgiai6u0jjv.jpg" alt="Cappuccino" />
              <div className="text-container">
                <h4>Cinnamon Roll                </h4>
                <p>$8</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/16639279892973dfhhxrrltp.jpg" alt="Americano" />
              <div className="text-container">
                <h4>Hazelnut Brownie Slice                </h4>
                <p>$7</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/16639283472374abitar4tnf.jpg" alt="Espresso" />
              <div className="text-container">
                <h4>Red Velvet
                </h4>
                <p>$5</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/166392852005320phs5lvjd9.jpg" alt="Mocha" />
              <div className="text-container">
                <h4>Summer Layer Cake
                </h4>
                <p>$9</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/1663928568202zp2889aamqk.jpg" alt="Flat White" />
              <div className="text-container">
                <h4>Blueberry Cheesecake
                </h4>
                <p>$8</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/166392772943926aejml6scx.jpg" alt="Macchiato" />
              <div className="text-container">
                <h4>Coffee Eclair
                </h4>
                <p>$9</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/1663928134679oyyjfseuca.jpg" alt="Irish Coffee" />
              <div className="text-container">
                <h4>Berry Ricotta Slice
                </h4>
                <p>$12</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/1663928293161d7d8yu1givs.jpg" alt="Cold Brew" />
              <div className="text-container">
                <h4>Strawberries & Cream
                </h4>
                <p>$6</p>
              </div>
            </div>

            <div className="sweet-container">
              <img src="https://mnz-alpha-users-content.s3.ap-southeast-2.amazonaws.com/2022/09/23/1663928451329spuxpaaqnc.jpg" alt="Affogato" />
              <div className="text-container">
                <h4>Chocolate Drip Cake</h4>
                <p>$11</p>
              </div>
            </div>
            
          </div>
        </div>

        
      </div>

     
      
    );
        
    
  }
}

export default About;

