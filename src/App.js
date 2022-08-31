import './App.css';
import React, { useState } from "react";

function App() {
  const cardContent = {
    lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções.",
    sol: "Não poderia ser diferente a mensagem quando o assunto é o O Sol. Sua luz é sinal de positividade e está completamente associado aos objetivos e sucesso.",
    mundo: "É aqui que aparece as conquistas feitas, os aprendizados adquiridos, as barreiras rompidas e toda a batalha travada.",
    estrela: "Não é de se admirar que a estrela represente em nossas vidas sinal de luz e renovação. Sem essa âncora é possível agora caminhar em direção a uma nova vida."
  }


  function Card({cardName, cardText, className='', onClick}) {

    const [flip, setFlip] = useState(false);

    return (
      <div className={`card ${flip ? 'flip' : ''}`}>
        <div className="front" onClick={() => setFlip(!flip)}>
          <h3>click me</h3>
        </div>
        <div className="back" onClick={() => setFlip(!flip)}>
          <h3>{cardName}</h3>
          <p>{cardText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cards_container">
      {Object.entries(cardContent).map(itemArr => (
        <Card cardName={itemArr[0]} cardText={Object.values(itemArr[1])} key={itemArr[0]}></Card>
      ))}
    </div>
  );
}

export default App;
