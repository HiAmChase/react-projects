import React from "react";
// import { Message } from "./Message";
import { Summary } from "./Summary";
import { createRoot } from "react-dom/client";

let names = ["Bob", "Alice", "Dora"];

function reverseNames() {
  names.reverse();
  createRoot(document.getElementById("root")).render(<App />);
}

function promoteName(name) {
  names = [name, ...names.filter((val) => val !== name)];
  createRoot(document.getElementById("root")).render(<App />);
}

function App() {
  return (
    <table className="table table-sm table-stripped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={name}>
            <Summary
              index={index}
              name={name}
              reverseCallback={reverseNames}
              promoteCallback={promoteName}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
