// PART 0: Write a function called squareDance() that squares each number in an array.

var squareDance = function(inputArray) {
	var squaredArray = []
	for (var i = 0; i < inputArray.length; i++) {
		squaredArray.push(inputArray[i] * inputArray[i])
	}
	return squaredArray
}


// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.

var nicer = function(sentence) {
 var cleanSentence = ''
 var wordsArray = sentence.split(' ')
 for (var i = 0; i < wordsArray.length; i++) {
     if (wordsArray[i] !== 'heck' && wordsArray[i] !== 'darn' && wordsArray[i] !== 'crappy' && wordsArray[i] !== 'dang') {
         cleanSentence += wordsArray[i] + ' '
     }
	}
    return cleanSentence.trim()
}

// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 


var capitalize = function(str) {
	return str.substring(0, 1).toUpperCase() + str.slice(1)
}

var capitalizeAll = function(sentence) {
    var newSentence = sentence.split(' ')
    var newArray = []
    for (var i = 0; i < newSentence.length; i++) {
        	var words = newSentence[i]
    	    newArray.push(capitalize(words))
    }
     return newArray.join(' ')
}


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)



var properSentences = function(sentence) {
    var newSentence = sentence.split('. ')
    var newArray = []
    for (var i = 0; i < newSentence.length; i++) {
        	var words = newSentence[i]
            words += '.'
    	    newArray.push(capitalize(words))
    }
    var properSentence = newArray.join(' ') 
    return properSentence.slice(0, -1)
}

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

var iPutTheFunIn = function(string) {
    var funWithStrings = (string.substring(0, string.length/2)) + 'fun' + (string.substring(string.length/2))
    return funWithStrings
}

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.


