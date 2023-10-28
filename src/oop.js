const firstValueObj = new Car();
const secondValueObj = new Car(
  "daihatsu",
  2000,
  new Set().add("ABS"),
  {
    name: "D",
    lastname: "Biggy",
  },
  false
);

// console.dir(secondValueObj);
// setTimeout(() => {
//     secondValueObj.addComplectationOption();
//     setTimeout(() => console.log(secondValueObj), 1000);
// }, 3000);

// console.log(secondValueObj);

function Car(brand, productYear, sellegeOptions, user, isDamaged) {
  this.brand = brand || null;
  this.productYear = productYear || null;
  this.sellegeOptions = sellegeOptions || new Set();
  this.user = user || { name: null, lastname: null };
  this.productYear = productYear || null;
  this.isDamaged = isDamaged || null;
}
debugger;

Car.prototype.userNameSet = function () {
  const questionUser = prompt("insert you name,and lastname", [
    "Semen Semenchenko",
  ]);
  if (questionUser === null) return;

  let arrCreator = [];
  arrCreator.push(questionUser);
  arrCreator = arrCreator.join(" ").split(" ");
  this.user.name = arrCreator[0];
  this.user.lastname = arrCreator[1];
};

Car.prototype.addComplectationOption = function () {
  do {
    const questionUser = prompt(
      "please type you complectation (one option in this window)",
      ["ABS"]
    );

    if (questionUser === null) return;

    this.sellegeOptions.add(questionUser);
  } while (confirm("do you want send more options?") === true);
};

Car.prototype.nameSet = function () {
  this.brand = prompt("insert car brand", ["daihatsu"]);
};

Car.prototype.removeOption = function () {
  const textResult = prompt("insert option for remove ", "ESP");

  if (this.sellegeOptions.has(textResult) === true) {
    this.sellegeOptions.delete(textResult);
  } else {
    alert("Option not found, try again");
  }
};

const firstJetObj = new Jet(
  "LuftHansa",
  "Boeing",
  1992,
  false,
  "1-st class",
  true
);
// console.log(firstJetObj);

function Jet(
  company,
  brandOfJet,
  typeJetCargo,
  jetClass,
  productYear,
  isDamaged
) {
  this.company = company || null;
  this.brand = brandOfJet;
  this.typeJetCargo = typeJetCargo;
  this.jetClass = jetClass || null;
  this.productYear = productYear || null;
  this.isDamaged = isDamaged || null;
}
Jet.prototype.Vehicle = Vehicle;

Jet.prototype.setCompany = function () {
  this.company = prompt("please insert company name", ["Spirit Airlines"]);
};

Jet.prototype.setBrandJet = function () {
  this.brand = prompt("insert brand of production jet", ["Cessna"]);
};

Jet.prototype.setYearOfProd = function () {
  this.productYear = +prompt("insert year of production jet", [2011]);
};

Jet.prototype.setTypeJet = function () {
  this.typeJetCargo = confirm("is cargo boad ?");

  if (this.typeJetCargo !== true) {
    this.jetClass = prompt("class of jet ?", ["2-st class"]);
  }
};

function Vehicle() {}

Vehicle.prototype.setDamage = function () {
  this.isDamaged = confirm("Has damaged ?");
};
Vehicle.prototype.yearSet = function () {
  this.productYear = +prompt("insert year ", ["1984"]);
};

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
debugger;
firstValueObj.setDamage();
console.log(firstValueObj);
