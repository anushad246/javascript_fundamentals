// User Input Validation:
function userInputValidation(strForTrim) {
  console.log(strForTrim.length, "..with out trim")
  console.log(strForTrim.trim().length, "..with trim")
  return `Processed: ${strForTrim.trim()}`;
}
let finaluserInputValidation = userInputValidation(" Hello World ");
console.log(finaluserInputValidation)

// Trimming Multiple Lines:
function trimmingMultipleLines(multiLinStr) {
  return multiLinStr
    .split("\n")
    .map((item) => item.trim())
    .join("\n");
}
""
let finalTrimmingMultipleLines = trimmingMultipleLines(
  "   Hello World   \n   This is a test   \n   JavaScript is fun   "
);
console.log(finalTrimmingMultipleLines)

// Trimming and Counting Words:
function trimmingandCountingWords(smlStr) {
  return smlStr.trim().split(" ").length;
}
let finaltrimmingandCountingWords = trimmingandCountingWords(" Hello world! ");
console.log(finaltrimmingandCountingWords)

// Formatting Usernames:
function formattingUsernames(userNamArr) {
  return userNamArr.map((element) => element.trim());
}
let finalFormattingUsernames = formattingUsernames([
  " Alice ",
  " Bob",
  "Charlie ",
  " Eve",
]);
console.log(finalFormattingUsernames)

// Cleaning Up Address Data:
function cleaningUpAddressData(addressArr) {
  return addressArr.reduce((prev, curr) => {
    let trimmedAddress = curr.trim();
    if (trimmedAddress.length > 0) {
      prev.push(trimmedAddress);
    }
    return prev;
  }, []);
}
let finalcleaningUpAddressData = cleaningUpAddressData([
  " 100 Main St ",
  "200 Broad St",
  " ",
  " 300 Elm St ",
]);
console.log(finalcleaningUpAddressData);
