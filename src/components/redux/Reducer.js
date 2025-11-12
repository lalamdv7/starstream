import { ADD_TO_BASKET, DELETE_ITEM_FROM_BASKET} from "./ActionNames";

export const initial_state = {
  books: [
    {
      img_url: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg", 
      name: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      price: 10.99, 
      genre: "classics-novels" },
  
    {
      img_url: "https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg", 
      name: "1984", 
      author: "George Orwell", 
      price: 9.99, 
      genre: "classics-novels" },
  
    {
      img_url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg", 
      name: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      price: 8.99, 
      genre: "classics-novels" },
  
    {
      img_url: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg", 
      name: "The Catcher in the Rye", 
      author: "J.D. Salinger", 
      price: 7.99, 
      genre: "classics-novels" },
  
    {
      img_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1605824499i/55953683.jpg", 
      name: "Moby Dick", 
      author: "Herman Melville", 
      price: 12.99, 
      genre: "classics-novels" },
  
    {
      img_url: "https://cdn.kobo.com/book-images/08ba5a67-f48d-420e-be8e-6de7a73b7d85/1200/1200/False/pride-prejudice-13.jpg", 
      name: "Pride and Prejudice", 
      author: "Jane Austen", 
      price: 6.99, 
      genre: "classics-novels" },
  
    {
      img_url: "https://m.media-amazon.com/images/I/913CifLtXeL._AC_UF1000,1000_QL80_.jpg", 
      name: "The Da Vinci Code", 
      author: "Dan Brown", 
      price: 11.99, 
      genre: "mystery" },
  
    {
      img_url: "https://m.media-amazon.com/images/I/71+khXHbe5L._AC_UF894,1000_QL80_.jpg", 
      name: "Gone Girl", 
      author: "Gillian Flynn", 
      price: 10.99, 
      genre: "mystery" },
  
    {
      img_url: "https://rekhtabooks.com/cdn/shop/products/9789355201225_5537f524-3f40-44a9-8436-3ffc5749a32a.jpg?v=1680027292", 
      name: "Sherlock Holmes: The Complete Novels", 
      author: "Arthur Conan Doyle", 
      price: 14.99, 
      genre: "mystery" },
  
    {
      img_url: "https://m.media-amazon.com/images/I/81N+sjNpGML._AC_UF894,1000_QL80_.jpg", 
      name: "Big Little Lies", 
      author: "Liane Moriarty", 
      price: 10.99, 
      genre: "mystery" },
  
    {
      img_url: "https://m.media-amazon.com/images/M/MV5BZTg4MGViYTMtYTFkMC00YzVlLWExZDItOTM4NTUwMjc2NTE2XkEyXkFqcGc@._V1_.jpg", 
      name: "The Girl on the Train", 
      author: "Paula Hawkins", 
      price: 9.99, 
      genre: "mystery" },
  
    {
      img_url: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408855652.jpg", 
      name: "Harry Potter and the Sorcerer's Stone", 
      author: "J.K. Rowling", 
      price: 9.99, 
      genre: "children" },
  
    {
      img_url: "https://cdn11.bigcommerce.com/s-0f1b1/images/stencil/1280x1280/products/10120/73904/Y0406_Matilda_Front__66713.1608059727.jpg?c=2", 
      name: "Matilda", 
      author: "Roald Dahl", 
      price: 6.99, 
      genre: "children" },
  
    {
      img_url: "https://m.media-amazon.com/images/I/91NOcoxRkUL._AC_UF1000,1000_QL80_.jpg", 
      name: "Charlotte's Web", 
      author: "E.B. White", 
      price: 5.99, 
      genre: "children" },
  
  ],
  basket: [

  ],
  basket_total_price:0
};

export const reducer = (state = initial_state, action) => {
  switch(action.type){
    case ADD_TO_BASKET:
      return{
        ...state,
        basket : [
          ...state.basket,
          state.books[action.payload]
        ],
        basket_total_price : state.basket_total_price + state.books[action.payload].price
      }
    case DELETE_ITEM_FROM_BASKET:
      return{
        ...state,
        basket: [...state.basket.slice(0, action.payload), ...state.basket.slice(action.payload+1)],
        basket_total_price : state.basket_total_price - state.basket[action.payload].price
        
      }
    default:
      return state;

  }
  
}




