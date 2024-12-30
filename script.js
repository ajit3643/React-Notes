/** JAVASCRIPT */
// const heading = document.createElement("h2");
// heading.textContent = "By - Code with Ajit";
// heading.className = "greet";
// document.getElementById('root').append(heading);
// console.log("JAVASCRIPT ELEMENT", heading);

/** REACT Element */

// const heading = React.createElement("h1", {
//     className: "heading"
// }, "Hello World!");
// console.log("React element:", heading);
// ReactDOM.createRoot(document.getElementById("root")).render(heading);

// const image = React.createElement("img",{src:"https://files.codingninjas.in/coding-ninjas-24647.png"});
// ReactDOM.createRoot(document.getElementById("root")).render(image);

/** React JSX */
/** 
const jsxHeading = (<React.Fragment>
    <h1>Hello JXS!</h1>
    <p>Babel is a JavaScript compiler.Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:</p>
    <h2>React features</h2>
    <li>JSX(JavaScript Syntax Extension)</li>
    <li>Virtual DOM</li>
    <li>One-way Data Binding</li>
</React.Fragment>);
*/

function App(){
    return(<React.Fragment>
        <h1>Hello JXS!</h1>
        <p>Babel is a JavaScript compiler.Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:</p>
        <h2>React features</h2>
        <li>JSX(JavaScript Syntax Extension)</li>
        <li>Virtual DOM</li>
        <li>One-way Data Binding</li>
        </React.Fragment>)
        
}
const AnotherHeading = () =>(
    <React.Fragment>
        <h1>Functional Component Using Arrow Function</h1>
    </React.Fragment>
)


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);


