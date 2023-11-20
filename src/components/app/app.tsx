import React from 'react';
import GlobalStyle from '../../theme/globalStyle';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../blocks/header';
import Footer from '../blocks/footer';
import MainPage from '../pages/main-page/main-page';
import ConverterPage from '../pages/converter-page/converter-page';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <main>
        <Routes>
          <Route path={AppRoute.MAIN} element={<MainPage/>} />
          <Route path={AppRoute.CONVERTER} element={<ConverterPage/>} />
          <Route path="*" element={<MainPage/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

App.displayName = 'App';

export default App;
