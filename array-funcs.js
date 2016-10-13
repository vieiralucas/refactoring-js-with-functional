/*
 * Higher-order functions presentes nos Arrays
 *
 * tem várias, vou falar sobre 3 que serão importantes depois
 *
 *  - map
 *  - filter
 *  - reduce
 */












var coolArray = [1, 2, 3, 4, 5, 6];

// Array.prototype.map
//
// map cria um novo array com os resultados da chamada da função fornecida
// para cada elemento no array

var square = function(n) {
  return n * n;
};

var squareCool = coolArray.map(square);

// console.log(squareCool); // -> [1, 4, 9, 16, 25, 36];



// Vamos implementar nosso próprio map?












// colinha caso tudo de errado
/*
var myMap = function(arr, mapperFn) {
  var newArr = new Array(arr.length);

  for (var i = 0; i < arr.length; i++) {
    newArr[i] = mapperFn(arr[i]);
  }

  return newArr;
};

var squareCool2 = myMap(coolArray, square);
// console.log(evenCooler);
*/



// Array.prototype.filter
//
// filter cria um novo array com todos os elementos que passaram no teste
// implementado pela função fornecida

var isOdd = function(n) {
  return n % 2 !== 0;
}

var oddCool = coolArray.filter(isOdd);
// console.log(oddCool); // -> [1, 3, 5]

// vamos implementar nosso próprio filter?










/*
// colinha do desespero
var myFilter = function(arr, callback) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

var oddCool2 = myFilter(coolArray, isOdd);
console.log(oddCool2); // -> [1, 3, 5]
*/

// Array.prototype.reduce
//
// Aplica a função fornecida contra um "acumulador" e cada valor do array
// para reduzir para um valor unico

var sum = function(a, b) {
  return a + b;
}

var total = coolArray.reduce(sum, 0);
// console.log(total); // -> 21

// vamos implementar o reduce?













// colinha desesperada do reduce
var myReduce = function(arr, reducer, initialValue) {
  for (var i = 0; i < arr.length; i++) {
    initialValue = reducer(initialValue, arr[i]);
  }

  return initialValue;
};
var myTotal = myReduce(coolArray, sum, 0);
// console.log(myTotal); // -> 21



// outros métodos interessantes
//
// Array.prototype.every
// Array.prototype.some
// Array.prototype.find
