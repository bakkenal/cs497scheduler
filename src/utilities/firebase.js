import { initializeApp } from 'firebase/app';
import { useState, useEffect} from 'react';
import { getDatabase, onValue, ref, set } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjpPLonCYX7xdDgYlsjx1Gegt0QmhUs9o",
    authDomain: "scheduler-31592.firebaseapp.com",
    databaseURL: "https://scheduler-31592-default-rtdb.firebaseio.com",
    projectId: "scheduler-31592",
    storageBucket: "scheduler-31592.appspot.com",
    messagingSenderId: "177966788355",
    appId: "1:177966788355:web:a0932b7f9013b2d1dbc336",
    measurementId: "G-PYT883M4RM"
  };

export const useData = (path, transform) => {
const [data, setData] = useState(); 
const [loading, setLoading] = useState(true);
const [error, setError] = useState();

useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
    const val = snapshot.val();
    if (devMode) { console.log(val); }
    setData(transform ? transform(val) : val);
    setLoading(false);
    setError(null);
    }, (error) => {
    setData(null);
    setLoading(false);
    setError(error);
    });
}, [path, transform]);

return [data, loading, error];
};

export const setData = (path, value) => (
  set(ref(database, path), value)
);

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);