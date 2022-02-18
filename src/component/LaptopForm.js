import React, { useState } from "react";
import "./LaptopForm.css";

const LaptopForm = () => {
  // const [newLaptop, setNewLaptop] = useState({
  //   laptopName: "blah",
  //   laptopModel: "",
  //   laptopDate: "",
  //   laptopPrice: "",
  // });

  // console.log(newLaptop);

  const [laptopName, setLaptopName] = useState("");
  const [laptopModel, setLaptopModel] = useState("");
  const [laptopDate, setLaptopDate] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");

  const laptopNameHandler = (event) => {
    setLaptopName(event.target.value);
    // setNewLaptop({
    //   ...newLaptop,
    //   laptopName: event.target.value,
    // });
    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopName: event.target.value,
    //   };
    // });
  };
  const laptopModelHandler = (event) => {
    setLaptopModel(event.target.value);
    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopModel: event.target.value,
    //   };
    // });
  };
  const laptopDateHandler = (event) => {
    setLaptopDate(event.target.value);
    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopDate: event.target.value,
    //   };
    // });
  };
  const laptopPriceHandler = (event) => {
    setLaptopPrice(event.target.value);
    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopPrice: event.target.value,
    //   };
    // });
  };

  // console.log(laptopName);
  // console.log(laptopModel);
  // console.log(laptopDate);
  // console.log(laptopPrice);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLaptop = {
      brand: laptopName,
      description: laptopModel,
      date: laptopDate,
      price: laptopPrice,
    };
    console.log(newLaptop);

    setLaptopName("");
    setLaptopModel("");
    setLaptopDate("");
    setLaptopPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Laptop Name</label>
        <input
          required
          value={laptopName}
          onChange={laptopNameHandler}
          id="name"
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="model">Model</label>
        <input
          required
          value={laptopModel}
          onChange={laptopModelHandler}
          id="model"
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          required
          value={laptopDate}
          onChange={laptopDateHandler}
          id="date"
          type="date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          required
          value={laptopPrice}
          onChange={laptopPriceHandler}
          id="price"
          type="number"
        />
      </div>

      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default LaptopForm;
