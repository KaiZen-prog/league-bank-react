import axios from 'axios';
import {BASE_URL} from '../../const';
import {AppDispatch} from '../store';
import {pasteExchangeRate, startFetchingExchangeRates, finishFetchingExchangeRates} from './converter';
import {startFetchingReviews, pasteReviews, finishFetchingReviews} from './reviews';
import {adaptExchangeRatesToApp} from '../../utils/common';
import {APIValues, APIRoutes} from '../../const';
import 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {firebaseConfig} from '../../firebase/firebase';

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

//Получает с openexchangerates.org данные о курсах валют
//Добавлен искусственный setTimeout() для демонстрации работы полосы загрузки в блоке Converter
export const loadExchangeRate = async (date: string, dispatch: AppDispatch) => {
  try {
    dispatch(startFetchingExchangeRates());
    await axios.get(`${BASE_URL}${APIRoutes.HISTORICAL}${date}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
      .then(({data}) => adaptExchangeRatesToApp(data))
      .then((exchangeRates) => dispatch(pasteExchangeRate({date: date, exchangeRate: exchangeRates})))
      .then(() => setTimeout(() => dispatch(finishFetchingExchangeRates()), 1000));
  } catch (error) {
    console.log(error);
  }
};

//Получает c firebase отзывы клиентов
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
