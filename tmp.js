
// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function(num) {
	return num + 1
}

// Part 0

// Fix the following code so doubleNum(2) wil equal 4. 

var doubleNum = function(num) {
	num * 2
}

/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */


// PART 2

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


// Part 7

// Using logical operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 


// Part 8

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.


// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.


// Part 10

// Make the following assertion work:
	
// Part 11

// Want more?

	
// Part 12

// This can't be healthy...

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

function checkFuncBasics(name,argNum) {
	try {
		var func = eval(name)
	}
	catch(e) {
		console.log(e)
		assert.equal(undefined,name,'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('Function', function() {
	describe('#addOne()', function(){
		it('should return input + 1', function(){
			checkFuncBasics('addOne',1)
			expect(addOne(1)).to.equal(2)
		})
	})
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
		it('find the minimum of four input numbers', function(){
			checkFuncBasics('minimum',4)
			assert.equal(0, minimum(1,2,4,0))
			assert.equal(-99, minimum(1000,-2,-99,50))
			assert.equal(-1000, minimum(-1000,-2,-99,50))
			assert.equal(-2, minimum(1000,-2,99,50))
		})
	})
	describe('#justOneString', function(){
		it('return true if one input is a string', function(){
			checkFuncBasics('justOneString',2)
			assert.equal(true, justOneString('a',5))
			assert.equal(true, justOneString(6,'dotron'))
			assert.equal(false, justOneString('peanut','butter'))
			assert.equal(false, justOneString(8,null))
		})
	})
	describe('#doTwice', function(){
		it('takes a function as input and invokes the function twice', function(){
			checkFuncBasics('doTwice',1)
			assert.equal(NUMBER,12)
			doTwice(function(){NUMBER += 1})
			assert.equal(NUMBER,14)
		})
	})
	describe('#conditionallyInvoke', function(){
		it('invokes the input function if a global variable called ORACLE stores the string "YES"', function(){
			checkFuncBasics('conditionallyInvoke',1)
			conditionallyInvoke(function(){NUMBER += 1})
			assert.equal(NUMBER,14)
			ORACLE = 'YES'
			conditionallyInvoke(function(){NUMBER += 1})
			assert.equal(NUMBER,15)

		})
	})
	describe('#factory', function(){
		it('should work', function(){
			checkFuncBasics('factory')
			assert.equal('hello world', factory()())
		})
	})
	describe('#factory2', function(){
		it('should work, too', function(){
			assert.equal('you sly dog', factory2()('you sly dog'))
			assert.equal(999, factory2()(999))
		})
	})
	describe('#factory3', function(){
		it('ok, this one also should work', function(){
			assert.equal('i have reached function nirvana', factory3('i have reached function nirvana')())
			assert.equal(100, factory3(100)())
		})
	})

})
