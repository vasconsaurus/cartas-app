import './App.css';
import './components/cards/Card.css'
import React from 'react';
import Card from './components/cards/Card.js';
import fetchCards from './utils/constants/cardContent';

function App() {
  const [cardContent, setCardContent] = React.useState([])

  // get promise from fetchCards, useState and useEffect to work with it
  // ref: https://stackoverflow.com/questions/72019607/reactjs-promise-to-array
  React.useEffect(() => {
    const loadCardContent = async () => {
      try {
        const cardContent = await fetchCards();
        setCardContent(cardContent)
      } catch(error) {
        console.log('error:', error)
      }
    };

    loadCardContent();
  }, []);

  console.log('useEffect', cardContent)
  // console.log('useEffect', cardContent.cards[0].name)

  const totalOfCards = [...Array(10).keys()]

  return (
    <div className="cards_container">
      {totalOfCards.map(e => (
        <Card cardName={cardContent.cards[e].name} cardText={cardContent.cards[e].desc} key={e} />
      ))}
    </div>
  );
}

export default App;
