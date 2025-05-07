'use strict';

import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAafBYonIsLWISQ0IweqFpHr21-5yVerKA',
  authDomain: 'todo-629f8.firebaseapp.com',
  projectId: 'todo-629f8',
  storageBucket: 'todo-629f8.appspot.com',
  messagingSenderId: '809558641810',
  appId: '1:809558641810:web:cfd1be367d46fe9a196a4b',
};

function displaySmallProjectModal(name) {
  getDoc(doc(db, name, 'Description')).then((res) => {
    console.log(res.data());
  });
}

function closeDisplaySmallProjectModal(id) {
  const element = document.getElementById(id);
  element.parentElement.removeChild(element);
}

const smallProjects = document.getElementById('smallProjectsWrapper');
const elementArray = Array.from(smallProjects.children);

const app = initializeApp(config);
const db = getFirestore(app);

elementArray.forEach((elem) => {
  elem.addEventListener(
    'click',
    (e) => {
      const firebaseField = e.currentTarget.id;
      displaySmallProjectModal(firebaseField);
    },
    true
  );
});
