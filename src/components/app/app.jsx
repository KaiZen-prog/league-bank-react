import React from "react";
import Header from "../header/header";
import MainSlider from "../main-slider/main-slider";
import ServicesSlider from "../services-slider/services-slider";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <MainSlider/>
        <ServicesSlider/>
      </main>
    </>
  );
};

App.displayName = `App`;

export default App;
