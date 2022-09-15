import './App.css';
import React, { useState } from "react";
import Card from "../src/components/cards/Card.js"

function App() {
  const cardContent = {
    lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções.",
    sol: "Não poderia ser diferente a mensagem quando o assunto é o O Sol. Sua luz é sinal de positividade e está completamente associado aos objetivos e sucesso.",
    mundo: "É aqui que aparece as conquistas feitas, os aprendizados adquiridos, as barreiras rompidas e toda a batalha travada.",
    estrela: "Não é de se admirar que a estrela represente em nossas vidas sinal de luz e renovação. Sem essa âncora é possível agora caminhar em direção a uma nova vida."
  }

  function shuffle(array) {
    const copy = [...array];
    const result = [];

    while (copy.length > 0) {
      result.push(copy.splice(Math.floor(Math.random() * copy.length), 1));
    }

    return result;
  }

  const shuffledCards = shuffle(Object.entries(cardContent))

  return (
    <div className="cards_container">
      {shuffledCards.map(itemArr => (
        <Card cardName={itemArr[0][0]} cardText={itemArr[0][1]} key={itemArr[0]} />
      ))}
    </div>
  );
}

export default App;
