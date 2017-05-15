// PART 0: Write a function called squareDance() that squares each number in an array.
function squareDance(array){
    var newArray = []
	for(var i=0; i<array.length; i++){
        var newNumber = array[i]*array[i]
		newArray.push(newNumber)
	}
    return newArray
}

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.

function nicer(sentence){
	var niceSentence = ''
	var wordsArray = sentence.split(' ')
	for (var i = 0; i<wordsArray.length; i++){ //in the Loop we will check if it is NOT one of the 'bad' words. this fixes the issue with blank spaces
		if ((wordsArray[i]!=='heck')&&(wordsArray[i]!=='dang')&&(wordsArray[i]!=='crappy')&&(wordsArray[i]!=='darn')){
			niceSentence += wordsArray[i] + ' '
		}
	}
	return niceSentence.trim() //trim removes the blank space at the end of string.
}


// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 

function capitalizeAll(sentence){
    var wordsArray = sentence.split(' ')
    var updatedSentence = ''
    for (var i = 0; i<wordsArray.length; i++){
        var firstLetter = wordsArray[i].substring(0,1) //isolate the first letter
        var firstLetterCap = firstLetter.toUpperCase() //capitalize it
        var restOfWord = wordsArray[i].substring(1) //isolate the rest of the word
        updatedSentence += firstLetterCap + restOfWord + ' ' //concatenate those letters
    }
    return updatedSentence.trim() //trim the extra white space at the end of the sentence.
}


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
function properSentences(sentence){
    var wordsArray = sentence.split('. ')
    var updatedWord = ''
    var updatedSentences = []
    for (var i = 0; i<wordsArray.length; i++){
        var firstLetter = wordsArray[i].substring(0,1)
        var firstLetterCap = firstLetter.toUpperCase()
        var restOfWord = wordsArray[i].substring(1)
        updatedWord = firstLetterCap + restOfWord
        updatedSentences.push(updatedWord)
    }
    var properSentence = updatedSentences.join('. ')
    return properSentence
}

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
function iPutTheFunIn(string){
    var wordsArray = string.split('') //split into an array
    var wordHalfLength = wordsArray.length/2 //find the midpoint of the array
    var firstHalf = string.substring(0,wordHalfLength) //split into first half
    var secondHalf = string.substring(wordHalfLength) //and second half
    var newWord = firstHalf + 'fun' + secondHalf //concatenate with 'fun' in the middle
    return newWord
}

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 
function split(string, delimiter){
    var splitArray = [] //create an emptyarray which will store all the seperated words
    var newString = '' // empty string to add words to up until it finds the delimiter
    for (var i = 0; i<string.length; i++){
        if (string[i] !== delimiter){ //loop through each letter. if it's not the delimiter...
            newString += string[i] //concatenate those letters and make them = the newString variable
        }
        else{
            splitArray.push(newString) //else once the delimiter is found, push it to the array.
            newString = '' //clear the string. otherwise itll simply add on to the previous pushes, making each word longer and longer
        }
    }
    splitArray.push(newString) //push the final string for last word in array since no more delimeter
    return splitArray
}

// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).
function pipeline(startingVal, function1, function2){
    var firstVal = function1(startingVal)
    var finalVal = function2(firstVal)
    return finalVal
}
// // visit test.js to see the tests that will be run against your code.


