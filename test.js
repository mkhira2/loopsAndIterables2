var expect = require('chai').expect
var assert = require('chai').assert

function checkFuncBasics(name,argNum) {
	var func = eval(name)
	assert.typeOf(func,'function','Make sure your function is called ' + name + ', case-sensitive.')
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
