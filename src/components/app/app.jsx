import React from "react";
import Header from "../header/header";
import MainSlider from "../main-slider/main-slider";
import ServicesSlider from "../services-slider/services-slider";
import Calculator from "../calculator/calculator";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <MainSlider/>
        <ServicesSlider/>
        <Calculator/>
      </main>
    </>
  );
};

App.displayName = `App`;

export default App;
