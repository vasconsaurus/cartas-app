import './App.css';
import './components/cards/Card.css'
import React from 'react';
import Card from './components/cards/Card.js';
import fetchCards from './utils/constants/cardContent';

function App() {
  const [cardContent, setCardContent] = React.useState({ cards: [], nhits: 0 })

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

  return (
    <div className="cards_container">
      {cardContent.cards.map(e => (
        <Card cardName={e.name} cardText={e.desc} key={e.name_short} />
      ))}
    </div>
  );
}

export default App;
