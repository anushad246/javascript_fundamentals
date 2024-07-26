
// Basic Declaration and Initialization
let name = "anusha";
let num = 11421;
console.log(`${name} ${num}`)


// Reassignment
let clickMe = false;
clickMe = true;
console.log(clickMe)


// Block Scope
const blockScopNum = 5;
if(blockScopNum == 5){
    let blockScopStr = "updating string value"
}
console.log(blockScopStr) 
// ==> Error: blockScopStr is not defined


// Loop Scope
for(let i = 0; i <= 10; i++){
    console.log(i)
}
console.log(i) 
// ==> Error: i is not defined


// Temporal Dead Zone (TDZ)
console.log(TemporalVar);
let TemporalVar;
TemporalVar = "checking Temporal Dead Zone";
console.log(TemporalVar)


// Shadowing
let checkGlobalScope = 'Anusha';
if(checkGlobalScope = 'Anusha'){
    let checkGlobalScope = "sandhya";
    console.log(checkGlobalScope, "block level");
}
console.log(checkGlobalScope, "global level");


// Constant vs. Let:
let letVarassigne = "letVarassigne";
letVarassigne = "let variable reassigning the values";
console.log(letVarassigne);
const constVarassign = "constvarassign";
constVarassign = "const variable reassigning the value";
console.log(constVarassign); 
// ==> TypeError: Assignment to constant variable.


// Array Manipulation:
let manipulationAnArray = [1,2,3,4,5];
console.log(manipulationAnArray);
manipulationAnArray.push(6);
delete manipulationAnArray[1];
console.log(manipulationAnArray);


// Object Manipulation:
let objectManipulation = {
    name: "anusha",
    age: 27
};
console.log(objectManipulation);
objectManipulation.salary = 2000;
objectManipulation.name = "sandhya"
console.log(objectManipulation)


// Function Scope:
function checkFunctionScopeVar(){
    let checkFunctionScopeVarDeclar = "anusha dammalapati";
    console.log(checkFunctionScopeVarDeclar, 'inside function')
}
console.log(checkFunctionScopeVarDeclar, "out side of the function")
//  ==> ReferenceError: checkFunctionScopeVarDeclar is not defined

