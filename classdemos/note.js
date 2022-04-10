let myVariable;
myVariable = 'Morgan';

/* This is a
multi-line comment*/

//This is a comment

// VARIABLES

let myVariable = 'bob'; //STRINGS

let myNumber = 3; // NUMBERS

let myBoolean = true; // BOOLEANS
let myBoolean = false;

let myArray = [1, 'bob', true] // ARRAYS

let myObject = document.querySelectior('p');
// OBJECTS, BUT ALL THE ABOVE ARE OBJECTS // TODO:

// OPERATORS

6 + 9; // ADDITION
'Hello' + 'World' // STRING ADDITION --> 'HelloWorld'

//SUBTRACTION --> -
//MULTIPLICATION --> *
//DIVISION --> /

//ASSIGNMENT --> =

//EQUALITY
myNumber === 4; //<--- This will result in false

//NOT, DOES-NOT-EQUALITY
!(myNumber === 3);  // !(TRUE) = FALSE;
myVariable !== 3; //FALSE


//CONDITIONALS

let iceCream == 'vanilla';

if(iceCream === 'vanilla'){
  alert('Yay, I love vanilla ice cream!')
} else{
  alert('Awww, but vanilla is my favorite...');
}

//EVENT LISTENERS

document.querySelector('html').addEventListener('click',
function(){
  alert('Ouch! Stop poking me!');
});
