import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

export default class Firebase {
  private static _firebaseConfig = {
    apiKey: 'AIzaSyCmyS6CMeGBh25Vg7FN39eaaqfoPK45T54',
    authDomain: 'league-bank-react.firebaseapp.com',
    databaseURL: 'https://league-bank-react-default-rtdb.firebaseio.com',
    projectId: 'league-bank-react',
    storageBucket: 'league-bank-react.appspot.com',
    messagingSenderId: '802162020684',
    appId: '1:802162020684:web:36cd3771fbfdf8f874bfe9',
    measurementId: 'G-35BCQ7CFRV'
  };

  static async downloadReviews() {
    const app = initializeApp(this._firebaseConfig);
    const fireStore = getFirestore(app);
    const reviewsCollection = collection(fireStore, 'reviews');

    const reviews: Array<any> = [];

    await getDocs(reviewsCollection)
      .then((reviewSnapshot) => {
        reviewSnapshot.forEach((doc) => {
          reviews.push(doc.data());
        });
      });

    return reviews;
  }
}
