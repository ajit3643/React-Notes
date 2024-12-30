let customers = [];
const capacity = 25;
let seatsLeft = 25;
let guestCount = React.createRef();
let guestName = React.createRef();
let guestPhone = React.createRef();

function timeFormat() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const meridian = hours < 12 ? "AM" : "PM";
  return `${hours < 12 ? hours : hours - 12}:${minutes}:${seconds} ${meridian}`;
}
const handleSubmit = (event) => {
  event.preventDefault();
  customers.push({
    count: guestCount.current.value,
    name: guestName.current.value,
    phone: guestPhone.current.value,
    checkIn: timeFormat(),
  });
  seatsLeft -= guestCount.current.value;
  guestCount.current.value = null;
  guestName.current.value = "";
  guestPhone.current.value = "";
  rootElement.render(<App />);
};

//  Handle customer deletion
const handleDelete = (index) => {
  const customerDetails = customers.find((c, i) => i === index);
  if (!customerDetails) {
    return;
  }
  const fltCustomer = customers.filter((c, i) => i !== index);
  customers = fltCustomer;
  seatsLeft += parseInt(customerDetails.count);
  rootElement.render(<App />);
};

const App = () => (
  <div className="App" style={{ textAlign: "center" }}>
    <div>
      <h2>Total Capacity:{capacity} </h2>
      <h2>Seats Left: {seatsLeft}</h2>
    </div>
    {/* Create a form here for the input count, name and phone number with a submit button*/}
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Guests count" ref={guestCount} />
      <input type="text" placeholder="Primary Guest Name" ref={guestName} />
      <input type="text" placeholder="Phone Number" ref={guestPhone} />
      <button>Add Entry</button>
    </form>
    <table border="1px" style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>Count</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Check In</th>
          <th>Remove Entry</th>
        </tr>
      </thead>
      <tbody>
        {/* Complete table to show records of customers */}
        {customers.map((obj, index) => (
          <tr key={index}>
            <td>{obj.count}</td>
            <td>{obj.name}</td>
            <td>{obj.phone}</td>
            <td>{obj.checkIn}</td>
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
