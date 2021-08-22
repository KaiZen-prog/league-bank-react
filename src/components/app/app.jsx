import React from "react";
import {Redirect, Switch, Route, HashRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from "../header/header";
import Footer from "../footer/footer";
import MainScreen from "../main-screen/main-screen";
import ConverterScreen from "../converter-screen/converter-screen";

const App = () => {
  return (
    <HashRouter>
      <Header/>
      <main>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={MainScreen}/>
          <Route exact path={AppRoute.CONVERTER} component={ConverterScreen}/>
          <Redirect to={AppRoute.ROOT}/>
        </Switch>
      </main>
      <Footer/>
    </HashRouter>
  );
};

App.displayName = `App`;

export default App;
