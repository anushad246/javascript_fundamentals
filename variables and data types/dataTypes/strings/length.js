// String Length Calculation:
function stringLengthCalculation(str) {
  console.log(str.length);
}
stringLengthCalculation("anusha");

// Longest String in Array:
function longestStringinArray(sampleArry) {
  return sampleArry.reduce(
    (prev, curr) => (prev.length > curr.length ? prev.length : curr.length),
    ""
  );
}
const sampleArry = ["apple", "banana", "cherry"];
let longestString = longestStringinArray(sampleArry);
console.log(longestString);

// Check Minimum Length:
function checkMinimumLength(str, num) {
  console.log(str.length >= num ? true : false);
}
checkMinimumLength("banana", 10);

// Sum of String Lengths:
function sumofStringLengths(str1, str2) {
  return str1.length + str2.length;
}
let sumofString = sumofStringLengths("hello", "world");
console.log(sumofString);

// Shorten String:
function shortenString(srtnStr, num) {
  return srtnStr.slice(0, num);
}
let finalShortenString = shortenString("javascript", 4);
console.log(finalShortenString);

// Average String Length:
function averageStringLength(lstOfStrs) {
  return (
    lstOfStrs.reduce((prev, curr) => prev + curr.length, 0) / lstOfStrs.length
  );
}
let finalavgLeng = averageStringLength(["a", "ab", "abc"]);
console.log(finalavgLeng);

// Length Comparison:
function lengthComparison(smapleStr1, smapleStr2) {
  if (smapleStr1.length !== smapleStr2.length) {
    return smapleStr1.length > smapleStr2.length ? smapleStr1 : smapleStr2;
  } else {
    return "Both strings are of equal length";
  }
}
let finalengthComparison = lengthComparison("cat", "dog");
console.log(finalengthComparison);

// Total Characters:
function totalCharacters(totalChar) {
  return totalChar.reduce((prev, curr) => prev + curr.length, 0);
}
let finalTotalCharacters = totalCharacters(["one", "two", "three"]);
console.log(finalTotalCharacters);

// Length Difference:
function lengthDifference(short, long) {
  return Math.abs(short.length - long.length);
}
let finallengthDifference = lengthDifference("short", "longer");
console.log(finallengthDifference);

// Check Empty String:
function checkEmptyString(empty) {
  return empty.length > 0 ? false : true;
}
let finalCheckEmptyString = checkEmptyString("");
console.log(finalCheckEmptyString);
