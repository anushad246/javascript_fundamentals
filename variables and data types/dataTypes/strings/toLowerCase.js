
// Normalize User Input:
function normalizeUserInput(str){
    console.log(str.toLowerCase())
}
normalizeUserInput("Hello World!")

// Case-Insensitive Search
function caseInsensitiveSearch(sensetiveStr, shortwrd){
    let shrt =  shortwrd.toLowerCase();
    let lognStr = sensetiveStr.toLowerCase()
    console.log(lognStr.includes(shrt))
}
caseInsensitiveSearch("Hello World!", "hello")

// Format Usernames
function formatUsernames(nameArr){
    return nameArr.map((item)=>item.toLowerCase())
}
let userName = formatUsernames(["ANUSHA", "SANDHYA", "JAYA", 'LATHA', 'MMATHA', 'ANJALI'])
console.log(userName)

// Email Validation:
function emailValidation(userEmail, givenEmail){
    return userEmail.toLowerCase() === givenEmail.toLowerCase()
}
let validateEmail = emailValidation("ANUSHADAMMALAPATI246@gmail.com", "ANUSHADAMMALAPATI246@gmail.comm")
console.log(validateEmail)

// Text Comparison:
function TextComparison(str1, str2){
    return str1.toLowerCase() === str2.toLowerCase()
}
let finalTextComparison = TextComparison("OpenAI GPT-4", "OpenAI GPT-4")
console.log(finalTextComparison)

// Title Case Conversion:
function titleCaseConversion(caseConvert){
    return caseConvert.toLowerCase().split(' ').map((item)=>item[0].toUpperCase()+item.slice(1)).join(' ')
}
let finalResults = titleCaseConversion("hello world")
console.log(finalResults)
