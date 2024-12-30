function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}
const JSX = () => {
  const greet = "Hello Ajit";
  const num = 123;
  let demo = null;
  //let sum;
  let isAdult = true;
  return (
    <>
      <h1>
        {greet} Let's Learn JSX {num} Go...{demo}
      </h1>
      <p>Sum of 58 + 78 = {sum(58, 78)}</p>
      <p>isAdult:{isAdult}</p>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<JSX></JSX>);
