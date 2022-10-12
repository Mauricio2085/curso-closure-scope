// variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb';  // reasignación
var a = 'aa'; // redeclaración


// Global scope
var fruit = 'Apple'; // Global

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// Otra forma de variables globales
function countries() {
    country = 'Colombia'; // Se declaró como global ya que no se declaro con "var o let o const"
    console.log(country);
}

countries();
console.log(country);
