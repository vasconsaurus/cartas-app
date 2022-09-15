function shuffle(array) {
  const copy = [...array];
  const result = [];

  while (copy.length > 0) {
    result.push(copy.splice(Math.floor(Math.random() * copy.length), 1));
  }

  return result;
}

export default shuffle;
