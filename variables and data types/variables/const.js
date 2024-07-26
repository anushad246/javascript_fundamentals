


// Basic Declaration and Initialization:
const strName = "const strings";
const num = 11421;
console.log(`${strName} ${num}`);

// Reassignment:
const reassignment = "checking  Reassignment value";
reassignment = "testimg Reassignment value";
console.log(reassignment);
// ==> TypeError: Assignment to constant variable.

// Object Manipulation:
const objectManipulation = {
  name: "vikram",
  age: 18,
};
console.log(objectManipulation)
objectManipulation.salary = 3000;
objectManipulation.name = "kamala hasan";
console.log(objectManipulation);
const reassigningObjectManipulation = objectManipulation;
console.log(reassigningObjectManipulation)

// Array Manipulation:
const arrayManipulation = [1, 2, 3, 4, 5];
console.log(arrayManipulation);
arrayManipulation.push(6);
delete arrayManipulation[1];
const reassigningarrayManipulation = arrayManipulation;
console.log(reassigningarrayManipulation);

// Block Scope:
const checkingValue = 5;
if (checkingValue == 5) {
  const insideBlock = "log inside values";
  console.log(insideBlock, 'block level value');
}
console.log(insideBlock, "out side of the block")
// ==> ReferenceError: insideBlock is not defined

// Hoisting:
console.log(varHoisting);
const varHoisting = "testing Hosting variable";
// ==> ReferenceError: Cannot access 'varHoisting' before initialization

// Constant within Function:
function ConstantwithinFunction() {
  const constantwithinFunction = "function values checking";
  console.log(constantwithinFunction, 'inside the functions')
}
console.log(constantwithinFunction, 'outside of the functions')
// ==>   ReferenceError: constantwithinFunction is not defined

// Iterating with Constants:
const sampleArray = ["anusha", "sandhya", "jaya", "latha", 'mamatha', "aruna"];
sampleArray.forEach((item) => {
  const newValue = item;
  console.log(newValue);
});
