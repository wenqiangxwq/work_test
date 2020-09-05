import React, { useState } from "react";
interface IObj {
  key: number;
  name: string;
}
interface IProps {
  navList: Array<IObj>;
}
export default function ({ navList }: IProps) {
  console.log(navList);
  return (
    <div className="container">
      {navList.map((item) => {
        return <li key={item.key}>{item.name}</li>;
      })}
    </div>
  );
}
