
// Basic Object Creation:
const orignalObj = {
  name: "sandhya",
  employeeId: "AD6778",
  salary: 20000,
  address: function () {
    console.log(
      `line number${this.linename}, house number ${this.housenumber}`
    );
  },
};
let dupObj = Object.create(orignalObj);
dupObj.linenumber = "vittal rao road";
dupObj.housenumber = "5-1-246";
dupObj.address();



// Prototype Chain:
// Level 1: Base prototype
let prototypeChain = {
  bike: "Hero Splendor Plus",
  price: 73646,
  highlights: function () {
    console.log(
      `engineCapacity:${this.engineCapacity}, Mileage:${this.mileage}, bike:${this.bike}`
    );
  },
};
// Level 2: Intermediate prototype
let prototypeChain2 = Object.create(prototypeChain);
prototypeChain2.engineCapacity = "97.2 cc";
prototypeChain2.mileage = "60 kmpl";
prototypeChain2.extraHighlights = function () {
  console.log(`cheking ${this.numberOfBikes}`);
};
// Level 3: Final prototype
let prototypeChain3 = Object.create(prototypeChain2);
prototypeChain3.numberOfBikes = 100;
prototypeChain3.sales = function(){
    console.log(`checking saled bikes: ${this.numberOfBikeSaled}`)
}
prototypeChain3.numberOfBikeSaled = 50
// methodcalling
prototypeChain3.sales();
prototypeChain3.highlights();
prototypeChain3.extraHighlights();
// propertycalling
console.log(prototypeChain3.bike)
console.log(prototypeChain3.price)
console.log(prototypeChain3.engineCapacity)
console.log(prototypeChain3.mileage)
console.log(prototypeChain3.numberOfBikes)
console.log(prototypeChain3.numberOfBikeSaled)



// Custom Constructor Functions
let car = {
    carModel: "Land Rover Range Rover Sport Car Specifications",
    Specifications: function(){
        console.log(`Fuel Type: ${this.fuelType}`);
    }
};
function carSpecifications(acceleration, topSpeed, fuelType){
    let specifications = Object.create(car)
    specifications.fuelType = fuelType;
    specifications.acceleration = acceleration;
    specifications.topSpeed = topSpeed;
    return specifications
}
let carDetails = new carSpecifications("3.8 to 5.9 seconds", "225 to 290 kmph", "Diesel & Petrol")
carDetails.Specifications()
console.log(carDetails.acceleration, carDetails.topSpeed, carDetails.fuelType)



// **Inheritance with Methods**:
let washingMachine = {
    machine: function(){
        console.log(`brand name: ${this.brandName} price: ${this.price}`)
    },
    machin2: function(){
        console.log(`brand name: ${this.brandName} price: ${this.price}`)
    }
}
let washingMachine2 = Object.create(washingMachine)
washingMachine2.brandName = "samsung";
washingMachine2.price = 20000;
washingMachine2.brandName = "sony";
washingMachine2.price = 30000;
washingMachine2.machin2();
washingMachine2.machine();
washingMachine2.machine = function(){
    console.log("override works successfully")
};
washingMachine2.machine();
washingMachine.machine.call(washingMachine2)



// **Shared State**:
let laptop = {
    laptopBrand: "HP",
    price: 3000,
    version: function(brand){
        this.laptopBrand = brand
        console.log('..this is ', this.laptopBrand, ' laptop')
    }
}
let laptop1 = Object.create(laptop)
let laptop2 = Object.create(laptop)
let laptop3 = Object.create(laptop)






