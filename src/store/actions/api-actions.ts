import axios from 'axios';
import {ExchangeRatesAPI} from '../../api/open-exchange';
import {AppDispatch} from '../store';
import {pasteExchangeRate, startFetchingExchangeRates, finishFetchingExchangeRates} from './converter';
import {startFetchingReviews, pasteReviews, finishFetchingReviews} from './reviews';
import {adaptExchangeRatesToApp} from '../../common/utils';
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {firebaseConfig} from '../../api/firebase';

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

//Получает с openexchangerates.org данные о курсах валют
//Добавлен искусственный setTimeout() для демонстрации работы полосы загрузки в блоке Converter
export const loadExchangeRate = async (date: string, dispatch: AppDispatch) => {
  try {
    dispatch(startFetchingExchangeRates());
    await axios.get(`${ExchangeRatesAPI.URL}${date}${ExchangeRatesAPI.IDPrefix}`)
      .then(({data}) => adaptExchangeRatesToApp(data))
      .then((exchangeRates) => dispatch(pasteExchangeRate({date: date, exchangeRate: exchangeRates})))
      .then(() => setTimeout(() => dispatch(finishFetchingExchangeRates()), 1000));
  } catch (error) {
    console.log(error);
  }
};

//Получает c api отзывы клиентов
export const loadReviews = async (dispatch: AppDispatch) => {
  try {
    dispatch(startFetchingReviews());
    const reviewsCollection = collection(fireStore, 'reviews');

    await getDocs(reviewsCollection)
      .then((reviewSnapshot) => {
        const reviews: Array<any> = [];

        reviewSnapshot.forEach((doc) => {
          reviews.push(doc.data());
        });

        dispatch(pasteReviews(reviews));
      });

    dispatch(finishFetchingReviews());
  } catch (error) {
    console.log(error);
  }
};
