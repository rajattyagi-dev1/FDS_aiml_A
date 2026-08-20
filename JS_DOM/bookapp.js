const data = [
  {
    title: "JavaScript Basics",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80",
    price: 525,
  },
  {
    title: "Learning React",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80",
    price: 425,
  },
  {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80",
    price: 625,
  },
];

function Book(props) {
  const image = React.createElement("img", {
    src: props.image,
    alt: props.title,
    width: "150px",
    height: "200px",
    className: "img",
  });
  const title = React.createElement("h2", null, props.title);
  const price = React.createElement("p", null, `Price: ${props.price}/-`);
  const addButton = React.createElement(
    "button",
    { type: "button", onClick: () => props.onAdd(props.book) },
    "Add to Cart",
  );
  return React.createElement(
    "article",
    { className: "card" },
    image,
    title,
    price,
    addButton,
  );
}

function App() {
  const [cart, setCart] = React.useState([]);
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  function addToCart(book) {
    setCart((currentCart) => [...currentCart, book]);
  }

  const cartTotal = cart.reduce((total, book) => total + book.price, 0);
  const books = data.map((book) =>
    React.createElement(Book, {
      key: book.title,
      title: book.title,
      image: book.image,
      price: book.price,
      book,
      onAdd: addToCart,
    }),
  );

  const cartItems = cart.length
    ? cart.map((book, index) =>
        React.createElement(
          "li",
          { key: `${book.title}-${index}` },
          `${book.title} - ${book.price}/-`,
        ),
      )
    : React.createElement("li", null, "Your cart is empty.");

  const cartPanel = isCartVisible
    ? React.createElement(
        "aside",
        { className: "cart" },
        React.createElement("h2", null, "Your Cart"),
        React.createElement("ul", null, cartItems),
        React.createElement("strong", null, `Total: ${cartTotal}/-`),
      )
    : null;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "cart-controls" },
      React.createElement(
        "button",
        {
          type: "button",
          onClick: () => setIsCartVisible((visible) => !visible),
        },
        `View Cart (${cart.length})`,
      ),
    ),
    cartPanel,
    React.createElement("main", { className: "booklist" }, books),
  );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(React.createElement(App));
