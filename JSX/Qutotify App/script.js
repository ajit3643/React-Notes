const quotes = [];
let nameRef = React.createRef();
let quoteRef = React.createRef();

const clearInputs = () => {
  nameRef.current.value = "";
  quoteRef.current.value = "";
};

// create handler function here
const handleQuote = (event) => {
  const name = nameRef.current.value;
  const quote = quoteRef.current.value;

  if (!name || !quote) return;
  if (event.key !== "Enter") return;
  quotes.unshift({ name, quote });
  clearInputs();
  rootElement.render(<App />);
};

const App = () => (
  <div className="App">
    <h2>Quotify</h2>
    <div>
      <input ref={nameRef} placeholder="Name" />
      <input ref={quoteRef} placeholder="Quote" onKeyPress={handleQuote} />
    </div>
    <div className="quotes">
      {quotes.map((q, i) => (
        <div key={i}>
          <i>"{q.quote}"</i>
          <b>~ {q.name}</b>
        </div>
      ))}
    </div>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
