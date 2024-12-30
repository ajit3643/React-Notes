// const App = () => {
//   const myArray = [1, 2, 3, 4, 5, 6];
//   const myObj = {
//     name: "Ajit",
//     roll: 123,
//     address: {
//       pin: 847410,
//       city: "Madhubani",
//     },
//   };
//   return (
//     <>
//       <h1>This is my Array: {myArray}</h1>
//       <h2>This is my object: {myObj.name}</h2>
//     </>
//   );
// };
// const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<App />);

function Cars() {
  const cars = ["BMW", "Audi", "Mahindra", "Maruti", "TATA", "Toyota"];

  return (
    <>
      <h1>Cars Company</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </>
  );
}

const secondElement = ReactDOM.createRoot(document.getElementById("root"));
secondElement.render(<Cars />);
