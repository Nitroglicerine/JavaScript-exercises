// let user = {
//   name: "Semen",
//   skills: ["lazzy master", "chill god", "inclusive man"],
//   sayHi() {
//     console.log("Hello from" + this.name);
//   },

//   createSkill() {
//     let x = prompt("Add skill", ["Mad"]);
//     if (x == null || x == undefined || x == "") {
//       alert("skill has not been added");
//       return this.skills;
//     }

//     let f = this.skills.findIndex((item) => {
//       if (item == x) {
//         return true;
//       }
//     });
//     if (f >= 0) {
//       alert("This skill is exist ");
//       if (confirm("do yo want create new skill ?") == true) {
//         return this.createSkill();
//       } else {
//         alert("skill has not been added");
//       }
//     } else {
//       this.skills.push(x);
//     }

//     return this.skills;
//   },

//   skillsView() {
//     this.skills.forEach((skills) => console.log(skills));
//   },
//   findNdeleteSkill() {
//     let question = prompt("insert skill", ["lazzy"]);

//     let result = this.skills.filter((element) => {
//       if (element.includes(question)) {
//         return true;
//       }
//     });
//     if (result.length >= 1) {
//       alert(result);
//       if (confirm("delete this skill ?") == true) {
//         this.skills.splice(result, 1);
//       } else {
//         alert("skill has not been removed");
//       }
//     } else {
//       alert("Match skills not found");
//     }
//   },
// };

function createAuto() {
  let autoBase = {
    carBrand: "vehicleBrand",
    gearBoxType: "vehicleType",
    productionYear: "vehicleYear",
  };

  autoBase.carBrand = prompt("Марка авто", ["Toyota"]);
  do {
    autoBase.productionYear = prompt("Рік випуску", [2022]);
    if (autoBase.productionYear <= 1900 || autoBase.productionYear > 2023) {
      alert("Пашол НАХУЙ");
    }
  } while (autoBase.productionYear <= 1900 || autoBase.productionYear > 2023);
  do {
    autoBase.gearBoxType = prompt("Коробка автомат?", ["Ні/Так"]);
    if (autoBase.gearBoxType != "Так" && autoBase.gearBoxType != "Ні") {
      alert("Або так, або Ні");
    }
  } while (autoBase.gearBoxType != "Так" && autoBase.gearBoxType != "Ні");

  return autoBase;
}
const newarray = [];
console.log(createBase(createAuto(), newarray));
function createBase(a, newarray) {
  newarray.push(a);
  return newarray;
}
while (confirm("Додати ще авто ?") == true) {
  createBase(createAuto(), newarray);
}
