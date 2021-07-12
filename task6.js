let someArr = [1, 1, 1, 1, 1];

function hasTwins(Array){

    return new Set(Array).size === 1;
}

console.log(hasTwins(someArr))