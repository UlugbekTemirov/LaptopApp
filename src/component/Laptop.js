import React, { useState } from "react";
import "./Laptop.css";
import LaptopDate from "./LaptopDate";
import LaptopPrice from "./LaptopPrice";

const Laptop = (props) => {
  const { laptop } = props;

  const [title, setTitle] = useState("Wow, It is working...");

  const clickHandler = () => {
    console.log("Hello");
    setTitle("Clicked!!");
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <h2>{laptop.brand}</h2>
        </div>
        <div className="col">
          <h3>{laptop.description}</h3>
        </div>
        <div className="col">
          <LaptopDate date={laptop.date} />
        </div>
        <div className="col">
          <LaptopPrice price={laptop.price} />
        </div>
        <button onClick={clickHandler} className="btn btn-dark">
          Click me
        </button>
      </div>
    </div>
  );
};

export default Laptop;
