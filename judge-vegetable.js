const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function(veggies, char) {
  let winner = 0;
  let index = 0;
  for (let i = 0; i < veggies.length; i++) {
    if (veggies[i][char] > winner) {
      winner = veggies[i][char];
      index = i;
    }
  }
  return veggies[index].submitter;
}
console.log(judgeVegetable(vegetables, metric));