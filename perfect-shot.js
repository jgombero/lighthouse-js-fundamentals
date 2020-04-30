const moves = [
  'north',
  'north',
  'west',
  'west',
  'north',
  'east',
  'north'
]
const finalPosition = function (moves) {
  const result = [];
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'east') {
      x += 1;
    } else if (move === 'west') {
      x -= 1;
    } else if (move === 'north') {
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    }
  }
  result.push(x, y);
  return result;
}
console.log(finalPosition(moves));