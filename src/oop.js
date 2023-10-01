const firstValueObj = new Car("toyota", 1984, new Set(), { name: "", lastname: "" });
const secondValueObj = new Car("daihatsu", 2000, new Set(), { name: "", lastname: "" });

// console.log(secondValueObj);
// secondValueObj.userNameSet()

function Car(brand, productYear, sellegeOptions, user) {
    this.brand = brand;
    this.productYear = productYear;
    this.sellegeOptions = sellegeOptions;
    this.user = user;

    this.userNameSet = function () {
        let arrCreator = [];
        arrCreator.push(prompt("insert you name,and lastname", ["Semen Semenchenko"]));
        arrCreator = arrCreator.join(" ").split(" ");
        this.user.name = arrCreator[0];
        this.user.lastname = arrCreator[1];
    };

    this.addComplectationOption = function () {
        do {
            this.sellegeOptions.add(prompt("please type you complectation", ["climate control,ABS"]))
        }
        while (confirm("do you want send more options?") === true);
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
