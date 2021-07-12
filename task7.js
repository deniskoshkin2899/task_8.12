let evenOddNums = [4, 8, 15, 16, 23, 42];

liste(evenOddNums);

function liste(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven++;
    } 
      else {
      sumOdd++;
    }

  }
  
  console.log("Odd : " + sumOdd);
  console.log("Even : " + sumEven);
}
