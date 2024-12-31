import Student from "./Student";
import "./index.css";
function App() {
  return (
    <>
      <h1>Movies-App</h1>
      <Student name="Ajit" age={25} />
      <Student name="Amit" age={22} />
    </>
  );
}

export default App;
