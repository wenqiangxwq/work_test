import React, { useState } from "react";
import Home from "./com/home";
import Nav from "./com/nav";
import "./App.css";

function App() {
  const navList = [
    { key: 1, name: "one" },
    { key: 2, name: "two" },
    { key: 3, name: "three" },
    { key: 4, name: "four" },
  ];
  const [name, setName] = useState("qiang");
  const [age, setAge] = useState(13);
  return (
    <div className="app">
      <Nav navList={navList} />
      <Home name={name} age={age} />
    </div>
  );
}

export default App;
