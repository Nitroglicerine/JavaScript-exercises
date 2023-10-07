import "./oop.js"

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

// sortTrolles()

/*  Delete symbols task */


const reversedString = "Stop gninnipS My !sdroW"
function newStr(str) {
  str = str.split(" ")
  const createNewStr = str.map((item) => {

    if (item.length > 5) {
      return item.split("").reverse().join("")
    }
    else { return item }
  })
  return createNewStr
}
/* reverse strings task */



let createNum = 130890;

do {
  let calcSum = 0;
  createNum = createNum.toString()

  for (let i = 0; i < createNum.length; i++) {
    let f = +createNum[i]
    calcSum = calcSum + f
  }
  createNum = calcSum
}
while (createNum > 9 || createNum < -9)

// console.log(createNum)


/* task from calculate numbers in one  ----^^^^^----- */

const usersArrOne = []
const usersArrTwo = ["Semen"]
const usersArrTree = ["Semen", "Vasyl"]
const usersArrFour = ["Vasyl", "Petro", "Mykola"]
const usersArrFive = ["Vasyl", "Petro", "Mykola", "Ivan"]

function checkUsers(array) {

  if (array.length === 0) {
    return "no one likes this"
  }
  else if (array.length === 1) {
    return `${array} ${"likes this"}`
  }
  else if (array.length === 2) {
    return `${array[0]} and ${array[1]} ${"likes this"}`
  }
  else if (array.length === 3) {
    return `${array[0]}, ${array[1]} and ${array[2]} ${"likes this"}`
  }
  else {
    return `${array[0]}, ${array[1]} and ${array.length - 2} ${"others likes this"}`
  }

}

/* task for likes with social media users  ---^^^^----*/

const arrayCount = [1, 2, 3, 1, 1, 4]
const deleteArrValue = [1]

function sortDoublesAndDelete(arrCount, deleteValue) {
  let createNewValue = arrCount.filter((item) => {

    if (item == deleteValue) { return false }
    return true
  })
  return createNewValue;
}

/* search and delete array elements ---^^^----*/



function createPhoneNum() {
  let arrPhoneNum
  do {
    arrPhoneNum = +prompt("your phone number", ["enter here"])
    if (isNaN(arrPhoneNum)) {
      alert("Пашол НАХУЙ")
    }
    else if (arrPhoneNum === 0) {
      return
    }
  }

  while (isNaN(arrPhoneNum))
  let arrLght = arrPhoneNum.length
  do {
    arrPhoneNum = arrPhoneNum.toString()
    if (arrLght > 10 || arrLght < 5) {
      alert("Пашол НАХУЙ")
    }
  }

  while (arrLght > 10 || arrLght < 5)
  return alert(newPhoneFormate(arrPhoneNum))
}

function newPhoneFormate(arrNum) {

  return `(${arrNum.slice(0, 3)}) ${arrNum.slice(3, 6)}-${arrNum.slice(6)}`
}


/* change phone number format ---^^^----*/



const bitCount = 1234;

function bitReverse(count) {
  if (count >= 0) {
    let value = count.toString(2)
    let counter = 0;

    for (let i = 0; i < value.length; i++) {
      let r = +value[i]
      counter = counter + r
    }
    return counter
  }
  else { return "please insert number more 0" }
}


/* task for returned the number of bits ---^^^----*/


const arrOutlierOne = [2, 4, 0, 100, 4, 11, 2602, 36]
const arrOutlierTwo = [160, 3, 1719, 19, 11, 13, -21]

function findOutlierValue(arrOutlier) {
  let branchrrOutlierOddnum = arrOutlier.filter((item) => { if (item % 2 === 1) return true; })
  let branchrrOutlierEvenNum = arrOutlier.filter((item) => { if (item % 2 === 0) return true; })

  if (branchrrOutlierOddnum.length > 1) {
    return branchrrOutlierEvenNum;
  }
  else { return branchrrOutlierOddnum };
}


/* Find The Parity Outlier ---^^^---- */

const strValue = "Федір кончений лох"
const arrOfLetters = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "i", "ї", "й", "к", "л", "м", "н",
  "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"]
function foundLettersNum(strValue, arrLett) {
  const sortArr = []
  let strToArr = strValue.toLowerCase().split("")

  for (let i = 0; i < strToArr.length; i++) {
    for (let count = -1; (count = arrLett.indexOf(strToArr[i], count + 1)) !== -1;) {
      sortArr.push(count + 1);
    }
  }
  return sortArr.join(" ")
}


/* return alphabet numbers task ---^^^----*/



const fedorenkaStreetGames = [
  { name: "lyoha Yarovyi", botlesBeer: 15, smokeJoints: 27, drugsDoppings: 11 },
  { name: "Mykola Dmytrenko", botlesBeer: 3, smokeJoints: 0, drugsDoppings: 1 },
  { name: "Oksana Leshchenko", botlesBeer: 12, smokeJoints: 37, drugsDoppings: 87 },
  { name: "Oleg Pidlisnyi", botlesBeer: 35, smokeJoints: 57, drugsDoppings: 11 }
];

function streetGamesScore(fedorenka) {
  const createValueObj = fedorenka.map((item) => {
    const createObj = { name: "s", score: 0 };
    createObj.name = item.name;
    createObj.score = item.botlesBeer * 5 + item.smokeJoints * 3 + item.drugsDoppings * 2;

    return createObj
  });
  const sortedStreetGamesWinners = createValueObj.sort((a, b) => {
    // if (a.score !== b.score) { return a.score - b.score } else { return a.name - b.name }
    let f = a.score !== b.score ? a.score - b.score : a.name - b.name;
  })

  return sortedStreetGamesWinners;
}

/* total score calculation task */

/*
Напишите функцию, которая будет возвращать количество различных буквенных символов и числовых цифр,

не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить,

что входная строка содержит только буквы алфавита (как прописные, так и строчные) и числовые цифры.


"abcde" -> 0 # no characters repeats more than once;

"aabbcde" -> 2 # 'a' and 'b';

"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`);

"indivisibility" -> 1 # 'i' occurs six times;

"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice;

"aA11" -> 2 # 'a' and '1';

"ABBA" -> 2 # 'A' and 'B' each occur twice;


*/



function backRecursion(arg3) {
  if (arg3 === 1) { return arg3 }
  else { return arg3 + backRecursion(arg3 - 1) }
}
// console.log(backRecursion(5));




function sumToNum2(arg3) {
  let count = 0;

  for (let i = 0; i <= arg3; i++) {

    count += i;
  }
  return count;
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
const merged = [0, ...arr1, ...arr2]


function baxBunny(arg1, arg2) {


}

baxBunny("allo", "semen", "ebac")

const user = {
  // lol: 5,
  // kk: ''
}



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
const sumSalaries = Object.values(salaries)
const sumSaleriesValues = sumSalaries.reduce((acc, item) => {
  return acc + item
}, 0)


let salaries1 = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let count = 0;

for (let key in salaries1) {
  count += salaries1[key];
}


let menu = {
  title: "My menu",
  width: 200,
  height: 300,
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
    }
  }

  return menu;
}

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};



// let calculetor = new Calc()
// calculetor.read1()
// calculetor.mul1()
// console.log(calculetor);

function Calc() {
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















let bigValue = new AccValueObj(5)
// bigValue.SumAcc()
// bigValue.SumAcc()
// console.table(bigValue)

function AccValueObj(accum) {
  this.accum = accum
  this.SumAcc = function () {
    this.accum += +prompt("insert num"[2])
  }
}
