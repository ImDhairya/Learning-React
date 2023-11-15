import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, hiteshCounter] = useState(15);

  // let counter = 15

  const addValue = () => {
    if (counter > 19) {
      return;
    }
    console.log("clicked ", counter);
    counter = counter + 1;
    hiteshCounter(counter);
  };

  // This is a simple code that we have used to implement addValue and removeValue in our function so that we can use useState to upadate the value in our User Interface of our project

  // we were not able to see the changes in our ui even if we logged in the console 

  // so in order to chagne our ui we will use useState method so in order to get the things 

  const removeValue = () => {
    if (counter < 1) {
      return
    }
    counter = counter - 1;
    hiteshCounter(counter);
    console.log("Value removed", counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
