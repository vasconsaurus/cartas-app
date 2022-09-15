import shuffle from '../helpers/shuffle.js'

const cardContent = {
  lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções.",
  sol: "Não poderia ser diferente a mensagem quando o assunto é o O Sol. Sua luz é sinal de positividade e está completamente associado aos objetivos e sucesso.",
  mundo: "É aqui que aparece as conquistas feitas, os aprendizados adquiridos, as barreiras rompidas e toda a batalha travada.",
  estrela: "Não é de se admirar que a estrela represente em nossas vidas sinal de luz e renovação. Sem essa âncora é possível agora caminhar em direção a uma nova vida."
}

const shuffledCards = shuffle(Object.entries(cardContent))

export default shuffledCards;
