// Basic Conversion:
function basicConversion(name) {
  return name.toUpperCase();
}
let finalbasicConversion = basicConversion("anusha dammalapati");
console.log(finalbasicConversion);

// Array of Strings:
function arrayofstrings(stringArray) {
  return stringArray.map((item) => item.toUpperCase());
}
const stringArray = ["hello", "world", "javascript", "functions"];
let finalarrayofstrings = arrayofstrings(stringArray);
console.log(finalarrayofstrings);

// String Replacement:
function stringReplacement(sentence, replaceWrd) {
  return sentence
    .split(" ")
    .map((item) => (item === replaceWrd ? item.toUpperCase() : item))
    .join(" ");
}
const sentence = "the quick brown fox jumps over the lazy dog";
let finalstringReplacement = stringReplacement(sentence, "the");
console.log(finalstringReplacement);

// Conditional Conversion:
function conditionalConversion(wrd) {
  return wrd.length >= 5 ? wrd.toUpperCase() : wrd;
}
let finalconditionalConversion = conditionalConversion("java");
console.log(finalconditionalConversion);

// Object Property Values:
function objectPropertyValues(obj) {
  let finalObj = {};
  for (let i in obj) {
    finalObj[i] = obj[i].toUpperCase();
  }
  return finalObj;
}
const obj = {
  firstName: "John",
  lastName: "Doe",
  city: "New York",
};
let finalobjectPropertyValues = objectPropertyValues(obj);
console.log(finalobjectPropertyValues);

// Character Position Conversion:
function characterPositionConversion(wrdeven) {
  return wrdeven.split('').map((item, index)=> index%2==0?item.toUpperCase():item).join('')
}
let finalcharacterPositionConversion = characterPositionConversion("javascript");
console.log(finalcharacterPositionConversion);

// Initials Conversion:
function initialsConversion(initialName) {
    return initialName.split(' ').map((item)=>item[0]).join('')
  }
  let finalinitialsConversion = initialsConversion("Jane Mary Doe");
  console.log(finalinitialsConversion);

//   Palindrome Check:
  function palindromeCheck(initialName) {
    return initialName.split(' ').map((item)=>item[0]).join('')
  }
  let finalpalindromeCheck = palindromeCheck("Jane Mary Doe");
  console.log(finalpalindromeCheck);