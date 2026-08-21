// import React from "react";
// import ReactDOM from "react-dom/client";

function Book() {
  return (
    <div className="book">
      <img
        width="140px"
        height="110px"
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt="book"
      />
      <h2>Price : $19.99</h2>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <div className="index">
      <h1>Book Store</h1>
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
