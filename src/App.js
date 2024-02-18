// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ExerciseDetail from "./components/ExerciseDetail";
import "./App.css";
// import { Box } from "@mui/material";
import { fetchData, options } from "./utils/fetchData";

const Data = await fetchData(
  "https://exercisedb.p.rapidapi.com/exercises/targetList",
  options
);
console.log(Data);

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       {" "}
    //     </Route>
    //     <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <div>{/* <Display /> */}</div>
  );
};

export default App;
