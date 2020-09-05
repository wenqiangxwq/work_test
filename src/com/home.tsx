import React, { useState } from "react";
interface IProps {
  name: string;
  age: number;
}
export default function ({ name, age }: IProps) {
  console.log(name, age);
  const [count, setCount] = useState(0);
  return <div className="container">this is home </div>;
}
