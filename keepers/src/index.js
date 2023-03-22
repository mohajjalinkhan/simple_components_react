import React from "react";
import reactDOM from "react-dom";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";

reactDOM.render(
  <div>
    <Header></Header>
    <Note></Note>
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
