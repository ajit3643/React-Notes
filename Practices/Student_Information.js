function Student() {
  const sutdentInformation = [
    { name: "Ajit", age: 24, marks: 68 },
    { name: "Prince", age: 23, marks: 72 },
    { name: "Vinay", age: 25, marks: 60 },
  ];

  return (
    <>
      <h1>Students Details</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Student-Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {sutdentInformation.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Student />);
