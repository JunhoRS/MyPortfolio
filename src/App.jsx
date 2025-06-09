import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <Home />
      <About />
      <Portofolio />
      <ContactPage />
    </>
  );
};


export default App;
