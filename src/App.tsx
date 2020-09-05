import React, { useState } from "react";
import Home from "./com/home";
import "./App.css";

function App() {
  const [name, setName] = useState("qiang");
  const [age, setAge] = useState(13);
  return <Home name={name} age={age} />;
}

export default App;
