var assert = require('chai').assert

// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function(num) {
	return num + 1
}

// Part 1

// Fix the following code so doubleNum(2) wil equal 4. 

var doubleNum = function(num) {
	num * 2
}

/**
 * PART 2
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */


// PART 3

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.


// Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not.


// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***


// Part 5

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).


// Part 6

// Using logical operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 


// HARD MODE

// Part 7

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var doTwice = function() {

}

var helloWorld = function() {
	console.log('hello world')
}


doTwice(helloWorld) // should print 'hello world' to the console twice. 


// Part 8

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var conditionallyInvoke = function() {

}

var ORACLE = 'NO'

conditionallyInvoke(helloWorld) // should do nothing

var ORACLE = 'YES'

conditionallyInvoke(helloWorld) // should print hello world


// EPIC MODE

// For parts 9 through 11, your only instructions are to make the tests pass.

// Part 9

var factory = function() {

}


// Part 10

var factory2 = function() {
	// you want more?
}
	
// Part 11

var factory3 = function(stuff) {
	// This can't be healthy...	
}

console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

var NUMBER,
	ORACLE


function checkFuncBasics(name,argNum) {
	try {
		var func = eval(name)
	}
	catch(e) {
		assert.equal(undefined,name,'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('Function', function() {
	describe('#doubleNum()', function(){
		it('should return a doubled input', function(){
			checkFuncBasics('doubleNum',1)
			assert.equal(10, doubleNum(5))
		})
	})
	describe('#sum()', function(){
		it('should return the sum of two inputs', function(){
			checkFuncBasics('sum',2)
			assert.equal(19, sum(8, 11))
			assert.equal(104, sum(4, 100))
			assert.equal(6176, sum(867, 5309))
			assert.equal(null, sum('867', 5309))
			assert.equal(null, sum(true, 5))
			assert.equal(null, sum(5,-5))
		})
	})
	describe('#average()', function(){
		it('should return the average of two inputs', function(){
			checkFuncBasics('average',2)
			assert.equal(10, average(8, 12))
			assert.equal(150, average(100, 200))
		})
	})
	describe('#isNegative', function(){
		it('should tell whether a number is negative or not', function(){
			checkFuncBasics('isNegative',1)
			assert.equal(false, isNegative(10))
			assert.equal(false, isNegative(0))
			assert.equal(true, isNegative(-999))
		})
	})
	describe('#minimum', function(){
		it('should find the minimum of four input numbers', function(){
			checkFuncBasics('minimum',4)
			assert.equal(0, minimum(1,2,4,0))
			assert.equal(-99, minimum(1000,-2,-99,50))
			assert.equal(-1000, minimum(-1000,-2,-99,50))
			assert.equal(-2, minimum(1000,-2,99,50))
		})
	})
	describe('#justOneString', function(){
		it('should return true if one input is a string', function(){
			checkFuncBasics('justOneString',2)
			assert.equal(true, justOneString('a',5))
			assert.equal(true, justOneString(6,'dotron'))
			assert.equal(false, justOneString('peanut','butter'))
			assert.equal(false, justOneString(8,null))
		})
	})
	describe('#doTwice', function(){
		it('should take a function as input and invokes the function twice', function(){
			checkFuncBasics('doTwice',1)
			NUMBER = 12
			doTwice(function(){NUMBER += 1})
			assert.equal(NUMBER,14)
		})
	})
	describe('#conditionallyInvoke', function(){
		it('should invoke the input function if a global variable called ORACLE stores the string "YES"', function(){
			checkFuncBasics('conditionallyInvoke',1)
			NUMBER = 10
			ORACLE = 'NO'
			conditionallyInvoke(function(){NUMBER += 1})
			assert.equal(NUMBER,10)
			ORACLE = 'YES'
			conditionallyInvoke(function(){NUMBER += 1})
			assert.equal(NUMBER,11)

		})
	})
	describe('#factory', function(){
		it('should work as described below', function(){
			checkFuncBasics('factory')
			var str = 'factory()() should equal the string "hello world"'
			assert.typeOf(factory2(),'function',str)
			assert.equal('hello world', factory()(), str)
		})
	})
	describe('#factory2', function(){
		it('should work as described below', function(){
			var str = 'factory2()("you sly dog") should equal the string "you sly dog"'
			assert.typeOf(factory2(),'function',str)
			assert.equal('you sly dog', factory2()('you sly dog'), str)
			assert.equal(999, factory2()(999))
		})
	})
	describe('#factory3', function(){
		it('should work as described below', function(){
			var str = 'factory3("i have reached function nirvana")() should equal the string "i have reached function nirvana"'
			assert.typeOf(factory3(),'function',str)
			assert.equal('i have reached function nirvana', factory3('i have reached function nirvana')(), str)
			assert.equal(100, factory3(100)())
		})
	})
})
