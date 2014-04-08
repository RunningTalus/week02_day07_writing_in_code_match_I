// make an empty array of grades
// passes 100 at the end of the array
var grades = [];
grades.push(100);


// declare a function object that takes parameter of str
// takes a string, returns the word "pickled" + str
var pickle = function(str) {
	return "pickled" + str;
	};

// Create a string with 
// call join method, pass it one argument that is "comma, space"
// combines a string with a given delimiter 
['a', 'b', 'c'].join(', ');

// groups is an array of 2 items
// Should change second array to student.slice(6, 10) if you
// want the second half of the list
// .length is a property in this instance
if(student.length === 10) {
	groups = [
	student.slice(0, 5),
	student.slice(0, 5)
	];
}

// creates an array with 3 strings in a variable
// selects first string from the variable animal and stores it in predator
var animals = ["lion", "gazelle", "giraffe"];
var predator = animals[0];

// creates ???
var numbers = [];
for(i=0;i<5;i++){
	numbers[i] = i * i % 11;
	}
var max = Math.max.apply(null, numbers);

// makes a variable dinner and sets it to a object literal
// first key/value pair (or property) is an array with 2 strings
// etc, then 4th property is a number
var dinner = {
	appetizer: ['miso soup', 'spring rolls'],
	entree: ['drunken noodles'],
	desert: ['sticky rice'],
	price: 25
};

// Location is a global object, property of global window object
// href gives you url of current page
// indexOf is a string method that checks to see 
// if it exists as the first index of the url 
// If it does, call the log method method on the console object
if(location.href.indexOf("http://google.com" === 0) {
	console.log("You\'re on Google!");
	}

// declare empty array
// then add the items "sally" and "jim" to the end of the array
// shift pulls the first item off the array, prints out Jim
var line = [];
line.push("Sally");
line.push("Jim");
console.log(line.shift());

// function operating on a string.
// starts by splitting the string on a given delimiter
// get an array with each of the words b/c we're splitting on the space char
// takes each item in an array and transforms it
// takes word, converts first char to uppercase, concatenates it
// with the rest of the word which is put to lowercase
// join takes an array of strings and combines it to one string
// "welcome to RefactorU" -> "Welcome to Refactoru"
STRING.prototype.toTitleCase = function() {
	return this
	.split(" ")
	.map (function(word) {
		return word[0].toUpperCase();
		word.substring(1).toLowerCase();
		})
	.join(' ');
};

// array of items that are being passed in, trying to return
// another array (unique values from original array)
// objects have a characteristic that all keys are unique
// if current item is not array is in the dictionary
// add it to the dictionary. now has a key apple, value true (apple: true)
// next iteration of the loop. check if apple is in passes, skips over duplicate
// runs the for loop again, adds banana to output array,
// exists, gives unique values of arrays

var unique = function(arr) {
var d = {};
var output = [];
	for(var i=0; i<arr.length; i++) {
		if(!(arr[i] in d)) {
			d[arr[i]] = true;
			output.push(arr[i]);
		}
	}
	return output;
	};﻿