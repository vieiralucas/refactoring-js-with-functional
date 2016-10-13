
/*
                                    Refactoring JS using functional programming

                                              Lucas Vieira


                                           github:  vieiralucas
                                           twitter: vieiraIucas
                                                          /\ sim tem uma letra I ali
*/












// Caracteristicas Funcionais no JS

// Functions as First Class Citizens -> Funções são "objetos de primeira ordem"
//
// Podem ser armazenadas em variáveis

var callback = function(err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('success!');
}

// callback(); // -> success

// Podem ser passadas como argumentos
function doSomethingAsync(cb) {
  console.log('lets pretend this is doing some assynchronous i.o.');
  cb();
}

// doSomethingAsync(callback);

// Podem ser retornadas

function createAdder(num) {
  return function(n) {
    console.log(num + n);
  };
}

var sum1 = createAdder(1);

// sum1(2); // -> 3
// sum1(3); // -> 4
// sum1(4); // -> 5
//
//
// Entao funções em JS podem:
//  - ser armazenadas em variáveis
//  - ser passadas como argumentos
//  - ser retornadas


// Isso significa que em javascript eu posso ter higher-order functions
//
// Uma higher-order function é uma função que:
//  - recebe outra função como argumento
//  - retorna outra função

// doSomethingAsync é uma higher-order function
// createAdder é uma higher-order function
//
// outros exemplos:
//
//  setTimeout
//  setInterval
//  Array#map
//  Array#filter
//  Array#reduce

// Closures
//
// São funções que referem-se a variáveis que foram definidas em escopos superiores
// "Essas funções se lembram do ambiente em que elas foram criadas"
//

// lembra do createAdder?
function createAdder(num) {
  return function(n) { // essa função é uma closure
    console.log(num + n);
  };
}

// um exemplo mais interessante
function counter() {
  var c = 0;
  return function count() {
    c++;
    return c;
  };
}

var count = counter();

count(); // -> 1
count(); // -> 2
count(); // -> 3

var c = count(); // -> 4
// console.log(c);



