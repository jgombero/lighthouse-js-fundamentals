function howManyHundreds(num) {
  let hundreds = num / 100;
  return Math.floor(hundreds);
}

/* OR
function howManyHundred(num) {
  if (num % 100 === 0) {
    return num / 100;
  } else {
    return (num - (num % 100)) / 100;
  }
}
*/