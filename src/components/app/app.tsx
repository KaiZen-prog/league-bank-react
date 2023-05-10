import React from 'react';
import GlobalStyle from '../../theme/globalStyle';
import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../blocks/header';
import Footer from '../blocks/footer/footer';
import MainPage from '../pages/main-page/main-page';
import ConverterPage from '../pages/converter-page/converter-page';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path={AppRoute.MAIN} element={<MainPage/>} />
          <Route path={AppRoute.CONVERTER} element={<ConverterPage/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

App.displayName = 'App';

export default App;
