import React from "react";
import Header from "../header/header";
import MainSlider from "../main-slider/main-slider";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <MainSlider/>
      </main>
    </>
  );
};

App.displayName = `App`;

export default App;
