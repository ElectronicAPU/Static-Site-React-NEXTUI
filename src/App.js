import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import SingelCard from "./pages/SingelCard";
import SignIn from "./pages/(auth)/SignIn";
import SignUp from "./pages/(auth)/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:cardId" element={<SingelCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
