import React from 'react';
import GlobalStyle from '../../theme/globalStyle';
import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../header';
import Footer from '../footer/footer';
import MainScreen from '../main-screen/main-screen';
import ConverterScreen from '../converter-screen/converter-screen';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path={AppRoute.MAIN} element={<MainScreen/>} />
          <Route path={AppRoute.CONVERTER} element={<ConverterScreen/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

App.displayName = 'App';

export default App;
