import './App.css';
import './components/cards/Card.css'
import React, {useState, useEffect} from 'react';
import Card from './components/cards/Card.js';
import handleContent from './utils/constants/cardContent';

function App() {

  // get promise from handleContent, useState and useEffect to work with it
  // ref: https://stackoverflow.com/questions/72019607/reactjs-promise-to-array
  useEffect(() => {
    handleContent()
  }, []);

  const cardContent = [1, 2, 3]

  return (
    <div className="cards_container">
      {cardContent.map(e => (
        <Card cardName={'placeholder'} cardText={'placehoder'} key={'placehoder'} />
      ))}
    </div>
  );
}

export default App;
