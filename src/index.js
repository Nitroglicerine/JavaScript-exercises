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
// import{addInBase,caseRepear}from "./utils.js"
// const newarray = [];
// addInBase(createAuto(), newarray);

// while (confirm("Додати ще авто ?") == true) {
//   addInBase(createAuto(), newarray);
// }

// function createAuto() {
//   let autoBase = {
//     carBrand: "vehicleBrand",
//     gearBoxAutomatic: true,
//     productionYear: 1984,
//     clientName: "Sidor",
//   };

//   autoBase.carBrand = prompt("Марка авто", ["Toyota"]);

//   autoBase.carBrand = caseRepear(autoBase.carBrand);

//   do {
//     autoBase.productionYear = +prompt("Рік випуску", [2022]);

//     if (autoBase.productionYear <= 1900 || autoBase.productionYear > 2023) {
//       alert("Пашол НАХУЙ");
//     }
//   } while (autoBase.productionYear <= 1900 || autoBase.productionYear > 2023);
//   autoBase.gearBoxAutomatic = confirm("Коробка автомат?");
//   do {
//     autoBase.clientName = prompt("Імʼя власника", ["Білан"]);

//     autoBase.clientName = caseRepear(autoBase.clientName);

//     if (typeof autoBase.clientName !== "string") {
//       alert("Пашол Нахуй");
//     }
//   } while (typeof autoBase.clientName !== "string");

//   return autoBase;
// }

// console.log(newarray);
// let prom = prompt("array",["newAr"])
// function recFunc(arg1){
//   let newArr = [];
//   return function () {
//     newArr.push(arg1)

//   }
// }
// let gendolf = recFunc(prom)
// gendolf()


// function fttp (){
//   let num = 0;
//   return function x(){
//   num ++
//   if (num <= 100){
//     return num
//   }
//    x()

// }
// return num;}
// let xex = fttp()
// console.log(xex())

// function newCreateFunc(){
//   let x = 1;
//   return function  (num){
//     return x+num
//   }
// }
// let createFunc =  newCreateFunc()
// console.log(createFunc (2));

//task for cykle 

// let narCount = 0;

// for (let i = 0; i < fedorenka.length; i++) {

// if (fedorenka[i].narik == false) {
//     break
//   }

//   else {
//     sumAge += fedorenka[i].age;

//     narCount++
//   }

// }
// let newNum = sumAge / narCount

// console.log( newNum.toFixed(2) )

// fedorenka.forEach((item) => {
//   if (item.narik == true) {
//     sumAge += item.age;
//     count++;
//     sumAge = sumAge / count;
//   }
// })

{
  // sumAge: 120, type NUMBER
  // allNames: 'Pidlisniy, Leschenko, ...', type String
};




const fedorenka = [
  {
    name: 'Lyoha',
    narik: true,
    age: 30,
  },
  {
    name: 'Shakal',
    narik: false,
    age: 50,
  },
  {
    name: 'Pidlisniy',
    narik: false,
    age: 25,
  },
  {
    name: 'Oksanka',
    narik: true,
    age: 29,
  },
];

let createReduce = fedorenka.reduce((acc, item, index, array) => {

  let createSum = { ages: acc.ages + item.age, names: acc.names + item.name }
  if (array.length - 1 > index) {
    createSum.names += ",";
  }
  return createSum
}, { ages: 0, names: "" });

createReduce

/*  task from reduce accumulator  --^^--^^-- */


function sortTrolles() {
  const arrTrolles = ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я",
    "А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"]
  let trollesText = "Цей сайт для невдах, ЛОЛ"
  const createText = []
  trollesText = Array.from(trollesText);
  for (let x = 0; x < arrTrolles.length; x++) {
    for (let count = -1; (count = trollesText.indexOf(arrTrolles[x], count + 1)) !== -1;) {
      createText.push(count);
    }
  }

  let lastTrolesText = trollesText.map((item, index) => {
    const censore = "*"

    for (let n = 0; n < createText.length; n++) {
      if (index === createText[n]) {
        return censore;
      }
    }

    return item;
  })
  let trolleResult = lastTrolesText.filter((item) => {
    if (item === "*") {
      return false
    }
    return true
  })
  trolleResult = trolleResult.join("")

  return trolleResult
}

sortTrolles()

/*  Delete symbols task */


const reversedString = "Stop gninnipS My !sdroW"
function newStr(str) {
  str = str.split(" ")
  str = Array.from(str)
  const createNewStr = str.map((item) => {
    
    if (item.length > 5) {
      return Array.from(item).reverse().join("")
    }
    else { return item }
  })
  return createNewStr
}
console.log(newStr(reversedString));

