export function randomIntFromInterval(min: number, max: number) { // From https://stackoverflow.com/a/7228322
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(array: any) { // From https://stackoverflow.com/a/2450976
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}