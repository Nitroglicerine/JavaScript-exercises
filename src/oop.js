class Vehicle {
  constructor(isDamaged, productYear) {
    (this.isDamaged = isDamaged), (this.productYear = productYear);
  }
  setDamage() {
    this.isDamaged = confirm("Has damaged ?");
  }
  yearSet() {
    this.productYear = +prompt("insert year ", ["1984"]);
  }
}

class Car extends Vehicle {
  constructor(brand, productYear, sellegeOptions, user, isDamaged) {
    super(isDamaged, productYear);
    this.brand = brand || null;
    this.sellegeOptions = sellegeOptions || new Set();
    this.user = user || { name: null, lastname: null };
  }

  userNameSet() {
    const questionUser = prompt("insert you name,and lastname", [
      "Semen Semenchenko",
    ]);
    if (questionUser === null) return;

    let arrCreator = [];
    arrCreator.push(questionUser);
    arrCreator = arrCreator.join(" ").split(" ");
    this.user.name = arrCreator[0];
    this.user.lastname = arrCreator[1];
  }

  addComplectationOption() {
    do {
      const questionUser = prompt(
        "please type you complectation (one option in this window)",
        ["ABS"]
      );

      if (questionUser === null) return;

      this.sellegeOptions.add(questionUser);
    } while (confirm("do you want send more options?") === true);
  }

  nameSet() {
    this.brand = prompt("insert car brand", ["daihatsu"]);
  }

  removeOption = function () {
    const textResult = prompt("insert option for remove ", "ESP");

    if (this.sellegeOptions.has(textResult) === true) {
      this.sellegeOptions.delete(textResult);
    } else {
      alert("Option not found, try again");
    }
  };
}

class Jet extends Vehicle {
  constructor(
    company,
    brandOfJet,
    typeJetCargo,
    jetClass,
    productYear,
    isDamaged
  ) {
    super(isDamaged, productYear);
    this.company = company || null;
    this.brand = brandOfJet;
    this.typeJetCargo = typeJetCargo;
    this.jetClass = jetClass || null;
  }
  setCompany() {
    this.company = prompt("please insert company name", ["Spirit Airlines"]);
  }

  setBrandJet() {
    this.brand = prompt("insert brand of production jet", ["Cessna"]);
  }

  setYearOfProd() {
    this.productYear = +prompt("insert year of production jet", [2011]);
  }

  setTypeJet() {
    this.typeJetCargo = confirm("is cargo boad ?");

    if (this.typeJetCargo !== true) {
      this.jetClass = prompt("class of jet ?", ["2-st class"]);
    }
  }
}

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

const firstJetObj = new Jet(
  "LuftHansa",
  "Boeing",
  1992,
  false,
  "1-st class",
  true
);

firstValueObj.setDamage();
console.log(firstValueObj);
