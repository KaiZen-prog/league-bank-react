import {AppDispatch} from '../store';
import {startFetchingReviews, pasteReviews, finishFetchingReviews} from './reviews';
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {firebaseConfig} from '../../API/firebase';

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

//Получает c firebase отзывы клиентов
export const downloadReviews = async (dispatch: AppDispatch) => {
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
    console.log(error.message);
  }
};
