// PART 0: Write a function called squareDance() that squares each number in an array.

var squareDance = function(inputArray) {
    var squaredArray = []                                   // create empty array to push squared numbers in
    for (var i = 0; i < inputArray.length; i++) {           // iterate through input array
        squaredArray.push(inputArray[i] * inputArray[i])    //push squared numbers into empty array
    }
    return squaredArray
}

var newSquareDance = inputArray => {
    return inputArray.map((x) => {
        return Math.pow(x, 2)
    })
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

var newNicer = sentence => {
    sentence = sentence.replace(/heck|darn|crappy|dang/gi, '')
    return sentence
}

// // PART 2: write a function called capitalizeAll().
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.


var capitalize = function(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1) //capitalize function created for use in next two problems
}

var newCapitalize = str => {
    return str.substring(0, 1).toUpperCase() + str.substring(1)
}

var capitalizeAll = function(sentence) {
    var newSentence = sentence.split(' ')                       // turn input sentence into array for iteration
    var newArray = []                                           // create empty array to push capitalized words in
    for (var i = 0; i < newSentence.length; i++) {              // iterate through array of input sentences
        newArray.push(capitalize(newSentence[i]))               // push every capitalized word into empty array
    }
    return newArray.join(' ')                                   // return capitalized array as string
}

var newCapitalizeAll = sentence => {
    return sentence.replace(
        /\w\S*/g,
        text => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        }
    );
}


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var properSentences = function(sentence) {
    var newSentence = sentence.split('. ')                      // same as previous, only capitalizing
    var newArray = []                                           // each word after a '.' instead of
    for (var i = 0; i < newSentence.length; i++) {              // after a ' '
        newArray.push(capitalize(newSentence[i]))
    }
    return newArray.join('. ')
}

var newProperSentences = sentence => {
    return sentence.replace(
        /.+?[\.\?\!](\s|$)/g,
        text => {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.

var iPutTheFunIn = function(string) {
    var funWithStrings = (string.substring(0, string.length / 2)) + 'fun' + (string.substring(string.length / 2))
    return funWithStrings
}

var newIPutTheFunIn = string => {
    var funWithStrings = (string.substring(0, string.length / 2)) + 'fun' + (string.substring(string.length / 2))
    return funWithStrings
}

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own.

var split = function(string, delimiter) {
    var tempString = ''                         // create empty string to hold characters that aren't delimiter
    var splitArray = []                         // create empty array to push tempString into for return purposes
    for (var i = 0; i < string.length; i++) {   // iterate through input string
        if (string[i] !== delimiter) {          // if the character in the string isn't the delimiter,
            tempString += string[i]             // add that character into our string
        } else {
            splitArray.push(tempString)         // else, push to array if the character in the string is the delimiter,
            tempString = ''                     // turn our string back to empty
        }
    }
    splitArray.push(tempString)                 // return array with characters that aren't delimiter
    return splitArray
}

// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).


var pipeline = function(input, func1, func2) {
        var varOne = func1(input)
        var varTwo = func2(varOne)
        return varTwo
    }
    // // visit test.js to see the tests that will be run against your code.
