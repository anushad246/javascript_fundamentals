// Simple Concatenation
const string1 = "anusha";
const string2 = "dammalapati";
console.log(string1 + " " + string2);

// String and Number Concatenation
function stringandnumberconcatenation(str, num) {
  let numOfStr = num.toString();
  console.log(str + numOfStr);
}
stringandnumberconcatenation("anu = ", 11421);

// Multiple String Concatenation
function multipleStringConcatenation(arr) {
  return arr.reduce((prev, curr) => prev + curr + " ", "");
}
let finalResults = multipleStringConcatenation([
  "anusha",
  "is",
  "a",
  "good",
  "girl",
]);
console.log(finalResults);

// Concatenation in a Loop:
let finalData = "";
for (let i = 1; i <= 10; i++) {
  const numOfStr = i.toString();
  finalData += numOfStr;
}
console.log(finalData, "...finalData");

// Template String Concatenation
function templateStringConcatenation(str, num) {
  let strNumConcat = str + num;
  console.log(`${strNumConcat} working fine`);
}
templateStringConcatenation("sandhya dammalapati", 890);

// Conditional Concatenation
function conditionalConcatenation(str1, str2, flg) {
  if (flg == true) {
    return str1 + str2;
  } else {
    return "concatenation was not performed";
  }
}
let conditionaConcat =  conditionalConcatenation("anusha", "dammalapatittt", true);
console.log(conditionaConcat)
