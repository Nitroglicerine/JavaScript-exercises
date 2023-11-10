import  Vehicle  from './Vehicle.js';

export default class Car extends Vehicle {
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
  
    removeOption () {
      const textResult = prompt("insert option for remove ", "ESP");
  
      if (this.sellegeOptions.has(textResult) === true) {
        this.sellegeOptions.delete(textResult);
      } else {
        alert("Option not found, try again");
      }
    };
  }
  
