import React from "react";
import "./App.scss";
import { About, Header, Footer, Skills, Work } from "./Container/index";
import { Navbar } from "./Components/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
