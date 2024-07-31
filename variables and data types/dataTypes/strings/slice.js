// Extract Substring Task:
function extractSubstringTask(str) {
  return str.slice(4);
}
let finalExtractSubstringTask = extractSubstringTask(
  "Clon Messenger for you to clone accounts on another device"
);
console.log(finalExtractSubstringTask);

// Reverse Slice Task:
function reverseSliceTask(reverStr) {
  return reverStr.slice(-10).split(" ").reverse().join(" ");
}
let finalReverseSliceTask = reverseSliceTask(
  "Clon Messenger for you to clone accounts on another device"
);

// Replace Substring Task:
function replaceSubstringTask(str, startIdx, endIdx, replacement) {
  return str.slice(0, startIdx) + " " + replacement + str.slice(endIdx);
}
let finalReplaceSubstringTask = replaceSubstringTask(
  "Programming is fun and challenging",
  14,
  18,
  "exciting"
);
console.log(finalReplaceSubstringTask, "..");

// String Rotation Task
function stringRotationTask(rotateStr, Num) {
  return rotateStr.slice(Num) + rotateStr.slice(0, Num);
}
let finalstringRotationTask = stringRotationTask("abcdefgh", 3);
console.log(finalstringRotationTask);

// Palindrome Check Task:
function palindromeCheckTask(plindrmStr, startNum, endNum) {
  let slicePlindrmStr = plindrmStr.slice(startNum, endNum);
  return slicePlindrmStr.split("").reverse().join("") === slicePlindrmStr;
}
let finalPalindromeCheckTask = palindromeCheckTask(
  "racecar and level are examples",
  0,
  7
);
console.log(finalPalindromeCheckTask);

// Modify Array Task
function modifyArrayTask(sampleArr) {
  let quarterLength = Math.floor(sampleArr.length / 4);
  console.log(quarterLength, "....");
  let startIdx = quarterLength;
  let endIdx = sampleArr.length - quarterLength;
  console.log(sampleArr.slice(startIdx, endIdx));
}

let finalModifyArrayTask = modifyArrayTask([
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
]);
