function laugh(num) {
  let hahas = "";
  for (let x = 0; x < num; x++) {
    hahas += "ha";
  }
  hahas += "!";
  return hahas;
}

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc);
}

emotions("happy", laugh(2));