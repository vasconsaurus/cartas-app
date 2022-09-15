import './App.css';
import React from 'react';
import Card from './components/cards/Card.js';
import shuffledCards from './utils/constants/cardContent';

function App() {

  return (
    <div className="cards_container">
      {shuffledCards.map(itemArr => (
        <Card cardName={itemArr[0][0]} cardText={itemArr[0][1]} key={itemArr[0]} />
      ))}
    </div>
  );
}

export default App;
