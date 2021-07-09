num = prompt("please, enter any value");
convertedNum = +num


switch (typeof convertedNum) {
  case "number":
    
    
    if (isNaN(convertedNum)) {
      console.log('Это NaN');
      break;
    }
      
    
    if (convertedNum % 2 === 0) {
      console.log('Число четное');
    } else {
      console.log('Число нечетное');
    }    
    break;
    
  default:
    console.log('Упс, кажется, вы ошиблись');
}