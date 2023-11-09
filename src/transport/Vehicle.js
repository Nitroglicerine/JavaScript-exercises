
export default class Vehicle {
   
  constructor(isDamaged, productYear) {
      this.isDamaged = isDamaged;
      this.productYear = productYear;
    }
  
    setDamage() {
      this.isDamaged = confirm("Has damaged ?");
    }
    yearSet() {
      this.productYear = +prompt("insert year ", ["1984"]);
    }
  }

  