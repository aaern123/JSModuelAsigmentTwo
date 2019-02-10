//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Child() {
    this.make = "parent"
}

Child.prototype.genes = function() {
    console.log("I am a child and I inherit my genes from my "+ this.make);
};

var kid = new Child();
kid.genes();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

const numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("numberArray contains " + numberArray);
console.log("The length is " + numberArray.length);

console.log("I'm gonna use the slice.");
console.log(numberArray.slice(4,5));

console.log("I will remove an element");
numberArray.pop(9);
console.log("numberArray do now look like this: " + numberArray);
console.log("The new length is " + numberArray.length)


//did 3-4 together as one as i tought it would simplify it
//3. Delete the last number in the array that you created above.



//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

function changeName(text)
{
var newText = text.replace("strawberry", "banana")
var lastText = newText.replace("strawberries", "bananas")
console.log(lastText)
}
changeName("strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.")

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballArray = ["Manchester", "Liverpool", "Leeds", "Inter"]
console.log(footballArray);


function getNewFotballTeams() {
  footballArray = ["BMW", "Mercedes", "Audi", "Volvo"]
console.log(footballArray);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var person1 = {name:"Jon", age:26};
var person2 = {name:"Elias", age:54};
var person3 = {name:"Bjarte", age:44};

var listOfPeople = [person1, person2, person3]

console.log(listOfPeople);


var names =  listOfPeople.map(function(name){
  return listOfPeople.name
})


var names = []
for (var i = 0; i <listOfPeople.length; i++) {
 names.push(listOfPeople[i].name)
}

console.log(names);

//7. Create a simple function that logs the date.

function printTodaysDate() {
  var today = new Date();

  console.log(today)
}

printTodaysDate()
