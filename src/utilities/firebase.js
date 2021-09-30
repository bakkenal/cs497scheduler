import { initializeApp } from 'firebase/app';
import { useState, useEffect} from 'react';
import { getDatabase, onValue, ref, set } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHyCFrwaUJfzN8fJ7BziEKXnU-9eUrRQ4",
    authDomain: "scheduler-b5851.firebaseapp.com",
    databaseURL: "https://scheduler-b5851-default-rtdb.firebaseio.com",
    projectId: "scheduler-b5851",
    storageBucket: "scheduler-b5851.appspot.com",
    messagingSenderId: "410146707071",
    appId: "1:410146707071:web:1e4ca00c9417338af8914a",
    measurementId: "G-LNR2ZCBCJN"
};

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
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

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);