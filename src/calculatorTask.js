
 let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

// let calculetor = new Calc()
// calculetor.read1()
// calculetor.mul1()
// console.log(calculetor);

export function Calc() {
    this.read1 = function () {
      this.calcul1 = +prompt("insert number one", ["121"])
      this.calcul2 = +prompt("insert number two", ["121"])
    }
  
    this.sum1 = function () {
      this.calculSum = this.calcul1 + this.calcul2;
      this.clearCurrentValue()
    }
  
    this.mul1 = function () {
      this.calculMul = this.calcul1 * this.calcul2;
      this.clearCurrentValue()
    }
  
    this.clearCurrentValue = function () {
      delete this.calcul1, delete this.calcul2;
    }
}
