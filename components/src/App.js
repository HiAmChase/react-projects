import React from "react";
import { Message } from "./Message";
import { Summary } from "./Summary";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">Hello Adam</h1>
      <Message greeting="Hello" name="Bob" />
      <Message greeting="Hola" name={"Alice" + "Smith"} />
      <Message greeting="Hi there" name="Dora" />
      <Summary names={["Bob", "Alice", "Dora"]} />
    </div>
  );
}

export default App;
