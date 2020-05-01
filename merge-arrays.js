function merge(array1, array2) {
  //concats the 2 arrays
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  // sorts the concatenated array
  for (let k = 0; k < array1.length; k++) {
    for (let j = k + 1; j < array1.length; j++) {
      if (array1[k] > array1[j]) {
        let biggerNum = array1[k];
        array1[k] = array1[j];
        array1[j] = biggerNum;
      }
    }
  }
  return array1;
  // easier way : return array1.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);