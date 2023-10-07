const firstValueObj = new Car();
const secondValueObj = new Car("daihatsu", 2000, new Set().add("ABS"), { name: "D", lastname: "Biggy" });
firstValueObj.addComplectationOption()
// console.dir(secondValueObj);
// setTimeout(() => {
//     secondValueObj.addComplectationOption();
//     setTimeout(() => console.log(secondValueObj), 1000);
// }, 3000);
// secondValueObj.userNameSet()
console.log(firstValueObj);
console.log(secondValueObj);
// secondValueObj.userNameSet()

function Car(brand, productYear, sellegeOptions, user) {
    this.brand = brand || null;
    this.productYear = productYear || null;
    this.sellegeOptions = sellegeOptions || new Set();
    this.user = user || { name: null, lastname: null }




    this.userNameSet = function () {
        const questionUser = (prompt("insert you name,and lastname", ["Semen Semenchenko"]))

        if (questionUser === null) return;

        let arrCreator = []
        arrCreator.push(questionUser)
        arrCreator = arrCreator.join(" ").split(" ");
        this.user.name = arrCreator[0];
        this.user.lastname = arrCreator[1];
    }

    this.addComplectationOption = function () {

        do {
            const questionUser = (prompt("please type you complectation (one option in this window)", ["ABS"]))

            if (questionUser === null) return

            this.sellegeOptions.add(questionUser)
        } while (confirm("do you want send more options?") === true);
    }

    this.carYearSet = function () {
        this.productYear = +prompt("insert year car", ["1984"]);

    }

    this.carNameSet = function () {
        this.brand = prompt("insert car brand", ["daihatsu"]);
    }

    this.removeCarOption = function () {
        const textResult = prompt("insert option for remove ", "ESP")

        if (this.sellegeOptions.has(textResult) === true) {
            this.sellegeOptions.delete(textResult)
        } else {
            alert("Option not found, try again");
        }
    }
}

