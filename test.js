console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

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
	describe('#sumOfArray()', function(){
		it('should calculate sum of all numbers in an array', function(){
			checkFuncBasics('sumOfArray',1)
			assert.equal(3, sumOfArray([1, 2]))
			assert.equal(0, sumOfArray([]))
			assert.equal(6, sumOfArray([1, 2, 3]))
			assert.equal(27, sumOfArray([10, 9, 8]))
		})
	})
	describe('#maxOfArray()', function(){
		it('should return the highest number of an array', function(){
			checkFuncBasics('maxOfArray',1)
			assert.equal(4, maxOfArray([2, 4, 3]))
			assert.equal(100, maxOfArray([10,9,8,100,7,6]))
		})
	})
	describe('#isVowel()', function(){
		it('should return true if character is a vowel, otherwise false', function(){
			checkFuncBasics('isVowel',1)
			assert.equal(false, isVowel(0))
			assert.equal(false, isVowel("B"))
			assert.equal(false, isVowel("b"))
			assert.equal(true, isVowel("a"))
			assert.equal(true, isVowel("E"))
		})
	})
	describe('#reverse()', function(){
		it('should return the reversal of an input string', function(){
			checkFuncBasics('reverse',1)
			assert.equal("skoob", reverse("books"))
			assert.equal("elbuort on tnaw t'nod ew", reverse("we don't want no trouble"))
		})
	})
	describe('#fizzbuzz()', function(){
		it('should meet the standards listed in Part 4 instructions', function(){
			checkFuncBasics('fizzbuzz',2)
			assert.equal(".", fizzbuzz(1))
			assert.equal("..", fizzbuzz(2))
			assert.equal("..fizz", fizzbuzz(3))
			assert.equal("..fizz.buzz", fizzbuzz(5))
			assert.equal("..fizz.buzzfizz..fizzbuzz", fizzbuzz(10))
		})
	})
	describe('#findLongestWord', function(){
		it('should return the longest word in a string of words', function(){
			checkFuncBasics('findLongestWord',1)
			assert.equal("book", findLongestWord("a book full of dogs"))
			assert.equal("Texas", findLongestWord("don't mess with Texas"))
		})
	})
	describe('#GCD', function(){
		it('should find the Greatest Common Denominator of two numbers', function(){
			checkFuncBasics('GCD',2)
			assert.equal(1, GCD(5,1))
			assert.equal(3, GCD(15,3))
			assert.equal(5, GCD(15,5))
			assert.equal(10, GCD(50,20))
		})
	})
})
