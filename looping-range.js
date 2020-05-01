function range(start, end, step) {
  let rangeArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    return rangeArray;
  } else if (start > end) {
    return rangeArray;
  } else if (step <= 0) {
    return rangeArray;
  } else {
    for (let i = start; i <= end; i += step) {
      rangeArray += rangeArray.push(i);
    }
    return rangeArray;
  }
}
console.log(range(0, 30, 3));