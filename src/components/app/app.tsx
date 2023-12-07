import React, {Suspense} from 'react';
import GlobalStyle from '../../theme/globalStyle';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../blocks/header';
import Footer from '../blocks/footer';
import {MainPageAsync} from '../pages/main-page/main-page.async';
import {ConverterPageAsync} from '../pages/converter-page/converter-page.async';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={AppRoute.MAIN} element={<MainPageAsync/>} />
            <Route path={AppRoute.CONVERTER} element={<ConverterPageAsync/>} />
            <Route path="*" element={<MainPageAsync/>} />
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

App.displayName = 'App';

export default App;
