

let text = "Hello, World!";
console.log( text.substring(0,5)) // Extract the word "Hello" from text.
console.log( text.substring(7,12)) // Extract the word "World" from text.
console.log( text.substring(5,9)) // Extract the substring ", Wo" from text.

let phrase = "JavaScript is fun!";
console.log(phrase.substring(0,10)) // Extract the word "JavaScript" from phrase.
console.log(phrase.substring(14,17)) // Extract the word "fun" from phrase.
console.log(phrase.substring(11,15))// Extract the substring "is f" from phrase.

let sentence = "Learning to code is great!";
console.log(sentence.substring(0,8)) // Extract the word "Learning" from sentence.
console.log(sentence.substring(13,17))// Extract the word "code" from sentence.
console.log(sentence.substring(13,17))// Extract the substring "to c" from sentence.

// dynamick way
let message = "The quick brown fox jumps over the lazy dog";
let word = "quick";
let wordIndex = message.indexOf(word)
let finalindexarr = [];
for(let i = 0; i < word.length;i++){
    finalindexarr.push(wordIndex + i)
}
let startIndex = finalindexarr[0]
let endIndex = finalindexarr[finalindexarr.length-1]
console.log(message.substring(startIndex, endIndex+1))

