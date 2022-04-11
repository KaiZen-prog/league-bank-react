import React from "react";
import GlobalStyle from '../../theme/globalStyle';
import {Redirect, Switch, Route} from "react-router-dom";
import {AppRoute} from "../../const";
import Header from "../header";
import Footer from "../footer/footer";
import MainScreen from "../main-screen/main-screen";
import ConverterScreen from "../converter-screen/converter-screen";

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
