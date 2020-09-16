import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterClass from "./Component/Exercise-1/CounterClass";
import CounterFunction from "./Component/Exercise-1/CounterFunction";
import ListProduct from "./Component/Exercise-2/ListProduct";

function App() {
  return (
    <div>
      <div>
        <CounterClass />
      </div>
      <div>
        <CounterFunction />
      </div>
      <div>
        <ListProduct />
      </div>
    </div>
  );
}

export default App;
