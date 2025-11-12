import { Component } from "react";
import "./home.css";

class Home extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(

      <div className="home-container">

        <div className="page-1">
          <div className="left-container">
            <h2>STAR STREAM</h2>
            <p>Where Every Book is a Constellation.</p>
            <button><span><i className="fa-solid fa-rocket"></i></span> Explore the Stream</button>
          </div> 

          <div className="right-container">
            <img src="https://thumbs.dreamstime.com/b/man-suit-astronaut-sits-book-reading-his-legsthe-man-suit-astronaut-sits-book-289290731.jpg" alt="" />
          </div>

        </div>

        <div className="page-2 row">         
          <div className="text-box col-3"><p>Start Your Reading Journey Today!</p></div>
          <img className="col-3 img-1" src="https://assets.meetnewbooks.com/docImage/56190_the_post_office_girl-doc-image.webp" alt="" />
          <div className="printed-bags col-6">
            <p>Get printed bags just for 20$!</p>
            <button>&gt;&gt;Visit Store</button>
          </div>
          <div className="printed-mugs col-6"> 
            <p>Get printed mugs just for 15$!</p>
            <button>&gt;&gt;Visit Store</button>
          </div>
          <img className="col-3 img-2" src="https://m.media-amazon.com/images/I/717z16iNsnL.jpg" alt="" />
          <div className="text-box right-box col-3"><p>Join the Star Stream Community!</p></div>
          

        </div>

        <div className="page-3">
          <img src="https://static.insales-cdn.com/images/products/1/515/487440899/9780811204811-uk.jpg" alt="" />
          <div className="text-box">
            <h2>#BookOfTheMonth</h2>
            <p>Whenever I was asked what I wanted my first impulse was to answer "Nothing." <br />The thought went through my mind that it didn't make any difference, that nothing was going to make me happy.”
            <br /> <i>-Osamu Dazai</i></p>
          </div>
        </div>

        <div className="page-4">
          <h2>Articles</h2>
          <hr />
          <div className="articles-container row">
            <div className="article-container col-4" style={{backgroundImage: "url('https://i.pinimg.com/736x/8b/8f/5c/8b8f5c38faccab9dc2e0ed2050d4eab3.jpg')"}}> 
            <div className="text-box"><h2>The Joy of Reading</h2>
              <p>How Books Transform Our Lives</p></div>
              
            </div>
            <div className="article-container col-4" style={{backgroundImage: "url('https://demmelearning.com/wp-content/uploads/2018/09/Cultivate-Your-Moral-Imagination-by-Reading-Fiction.jpg')"}}> 
            <div className="text-box"><h2>Unlocking Imagination</h2>
              <p> The Power of Reading Fiction</p></div>
              
            </div>
            <div className="article-container col-4" style={{backgroundImage: "url('https://www.michigandaily.com/wp-content/uploads/2023/10/Your-favorite-book-edited.png')"}}> 
            <div className="text-box"><h2>From Page to Screen</h2>
              <p>The Art of Adapting Books into Movies</p></div>
                        
            </div>
            <div className="article-container col-4" style={{backgroundImage: "url('https://spines.com/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-15-18.29.27-A-simpler-conceptual-image-showing-Digital-vs-Physical-Book-Distribution.-The-left-side-features-a-sleek-minimalistic-setting-with-a-single-e-reade.webp')"}}> 
            <div className="text-box"><h2>The Evolution of Reading</h2>
              <p>From Traditional Books to E-Readers</p></div>
              
            </div>
            <div className="article-container col-4" style={{backgroundImage: "url('https://eszomvbwmbo.exactdn.com/wp-content/uploads/2021/06/reading-4134154_1280.jpg?strip=all&lossy=1&ssl=1')"}}> 
            <div className="text-box"><h2>Building a Reading Habit</h2>
              <p>Tips to Read More Books This Year</p></div>
              
            </div>
            <div className="article-container col-4" style={{backgroundImage: "url('https://www.geeky-gadgets.com/wp-content/uploads/2024/09/How-to-improve-your-book-reading-speed.webp')"}}> 
            <div className="text-box"><h2>Why You Should Read Every Day</h2>
              <p>Benefits for the Mind and Soul</p></div>
              
            </div>

          </div>
        </div>

        <div className="page-5 row">
          <div className="text-box">
            <h2>✨Unlock the Magic! Harry Potter Box Set on Sale at Star Stream Bookstore!✨</h2>
            <p>🧙 Complete 7-Book Series <br />
📖 Perfect for New Readers & Collectors <br />
🎉 Special Price: Only 50$! (Originally 99$) <br />
This magical offer is only available for a limited time! Whether you're reading for the first time or reliving the magic, these books are a must-have.</p>
            <button className="btn">&gt;&gt;Visit Store</button>
          </div>
          <img src="https://theme407-book-shop.myshopify.com/cdn/shop/products/harry_potter_the_complete_collection_7_books_set_collection_j_k_rowling_1_grande.png?v=1528102421" alt="" />
        </div>

        <div className="page-6">
          <div className="general-container">

            <div>
              <h3>Coffee, Cakes &<br /> Chapters</h3>
              <img src="https://images.unsplash.com/photo-1543233604-3baca4d35513?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMGNvcm5lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>

            <div>
            <img src="https://images.unsplash.com/photo-1615324606662-5d6d2ae148f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <h3>Sip, Savor, <br /> Storytime</h3>
            </div>

            <div>
              <h3>Pages & <br />Pastries</h3>  <img src="https://png.pngtree.com/background/20230416/original/pngtree-coffee-real-background-picture-image_2443328.jpg" alt="" />
              
            </div>

          </div>
        </div>

        <div className="page-7">
        <h2>"Books & Brews Await at Star Stream!</h2> 
        <p>Discover the perfect blend of stories and coffee at Star Stream, where every book comes with a freshly brewed experience. Whether you're diving into a novel in-store or ordering online, we've got your coffee and book needs covered. Enjoy the best of both worlds—anytime, anywhere! 📚☕</p>
        </div>

        <div className="page-8">
          <h2>Best Sellers</h2>

          <hr />
          <div className="book-container row">

            <div className="book-item col-3">
              <img src="https://m.media-amazon.com/images/I/81bAXZAp-GL.jpg" alt="" />
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
              <h2>Crime and Punishment</h2>
              <p>Fyodor Dostoyevsky</p>
              <p>15$</p>
            </div>

            <div className="book-item col-3">
              <img src="https://cdn.kobo.com/book-images/3ac03eac-d437-47e3-9b15-52542edabd56/1200/1200/False/war-and-peace-34.jpg" alt="" />
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
              <h2>War and Peace</h2>
              <p>Leo Tolstoy</p>
              <p>15$</p>
            </div>

            <div className="book-item col-3">
              <img src="https://m.media-amazon.com/images/I/71+4-p0BILL._AC_UF1000,1000_QL80_.jpg" alt="" />
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
              <h2>Anna Karenina</h2>
              <p>Leo Tolstoy</p>
              <p>15$</p>
            </div>

            <div className="book-item col-3">
              <img src="https://cdn.kobo.com/book-images/08ba5a67-f48d-420e-be8e-6de7a73b7d85/1200/1200/False/pride-prejudice-13.jpg" alt="" />
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
              <h2>Pride and Prejudice</h2>
              <p>Jane Austen</p>
              <p>15$</p>
            </div>

          </div>
        </div>

        <div className="page-10">

            <img className="img-1" src="https://www.ewawomen.com/wp-content/uploads/2017/11/Isabel_Coixet.JPG_cmyk.jpg" alt="" />
            <img className="img-2" src="https://www.uffmag.com/us/wp-content/uploads/clay-banks-GX8KBbVmC6c-unsplash-scaled.jpg" alt="" />
            <img className="img-3" src="https://images.squarespace-cdn.com/content/v1/5c718044797f74142d4786e2/1574481519845-9NPC61BCAQZJMWMKGYAU/70342276_3047214308639637_1231851651908763648_o.jpg" alt="" />
            <img className="img-4" src="https://hellosunshinemag.com.au/wp-content/uploads/2020/12/MALENY-BOOK-STORE_010_BLISS-PHOTOGRAPHY-BY-LEAH.jpg" alt="" />
            <img className="img-5" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixouQHVRt4EFbP7_hTS40nOHY-cS50tDz2aM9Iv88M7AIWmfY0EOuiEXnf0XwhDuZZaFBF_pnOIA5SvCNXDyVCnUziJzkVy3ZMiTvixM33a_m6LtvAtBfdDV_9j9JE8HcB5rHhNNPNI0w/s1600/JN+S+me+best.JPG" alt="" />
        </div>

        <div className="page-9">
            <div className="comment-box">
              <p><i className="fa-solid fa-pen-nib"></i></p>
              <p>I love the cozy vibe at Star Stream! Nothing beats enjoying a fresh coffee while flipping through a new book. Plus, the online ordering makes it so easy to keep up with my reading list!</p> 
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>            
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Emma_Thompson_2022.jpg/1580px-Emma_Thompson_2022.jpg" alt="" />
              <h3>Emma R.</h3>
            </div>

            <div className="comment-box">
              <p><i className="fa-solid fa-pen-nib"></i></p>
              <p>Star Stream is my go-to spot! Great coffee, amazing book selection, and I can even order books online when I can't make it in. Perfect place for book lovers!</p>
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jake_Gyllenhaal_2019_by_Glenn_Francis.jpg/1200px-Jake_Gyllenhaal_2019_by_Glenn_Francis.jpg" alt="" />
              <h3>Jake M.</h3>
            </div>

            <div className="comment-box">
              <p><i className="fa-solid fa-pen-nib"></i></p>
              <p>Such a gem of a place! The atmosphere, the coffee, and the books are all top-notch. I’m always excited to try their Book of the Month while relaxing in the café!</p>  
              <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></p>           
              <img src="https://people.com/thmb/4383NgJ7pNWR0PRcbvjoVkHX1Sk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1710x627:1712x629)/Sophia-Loren-091923-03-1bbaba3d68fc4979acedfc523453cdfb.jpg" alt="" />
              <h3>Emma R.</h3>
            </div>
        </div>


      </div>
      
    );   
  }
}

export default Home;

