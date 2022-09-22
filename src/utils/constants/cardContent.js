async function fetchCards() {
  try {
    const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10", {
      headers: {
        Accept: 'application/json',
      }
    });
    const data = await response.json();
    console.log('data', data)
    return data;
  } catch (error) {
    console.log('error:', error)
  }
}

export default fetchCards;
