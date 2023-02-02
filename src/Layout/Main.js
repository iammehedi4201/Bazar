import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export const MyContext =React.createContext("myContext")

const Main = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate =useNavigate();

  let catchValue = (e) => {
    e.preventDefault();
    const value = document.getElementById("input-field").value;
    setInputValue(value);
    const path ='/Shop';
    navigate(path)
  };

  return (
    <div>
      <MyContext.Provider
        value={{ catchValue: catchValue, inputValue: inputValue }}
      >
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

      </MyContext.Provider>
    </div>
  );
};

export default Main;
