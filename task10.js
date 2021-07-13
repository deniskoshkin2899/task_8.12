function isPrime(num) {

if(num > 1000) return alert("Вводимое значение превышает 1000");

{
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
}

console.log(isPrime(1000)) 


/// и второй способ

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;

    
}

let numToCheck = 2

if (numToCheck >= 1000) {
  console.log("Ну ты дурак что ли? Сказано же, число меньше 1000")
} else {
  console.log(isPrime(numToCheck) ? "Число простое" : "Число составное")
}

