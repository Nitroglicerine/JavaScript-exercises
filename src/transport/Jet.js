import Vehicle  from "./Vehicle.js"

export default class Jet extends Vehicle {
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
  
  