const fedorenka = [
  {
    name: "Lyoha",
    narik: true,
    age: 30,
  },
  {
    name: "Shakal",
    narik: false,
    age: 50,
  },
  {
    name: "Pidlisniy",
    narik: false,
    age: 25,
  },
  {
    name: "Oksanka",
    narik: true,
    age: 29,
  },
];

// task for cykle
let narCount = 0;
let sumAge
for (let i = 0; i < fedorenka.length; i++) {
  if (fedorenka[i].narik == false) {
    break;
  } else {
   
   sumAge += fedorenka[i].age;

    narCount++;
  }
}
let newNum = sumAge / narCount;

// console.log( newNum.toFixed(2) )

// task forEach fedorenka
let count = 0
fedorenka.forEach((item) => {
  if (item.narik == true) {
    sumAge += item.age;
    count++;
    sumAge = sumAge / count;
  }
});

/*  task from reduce accumulator  --^^--^^-- */

let createReduce = fedorenka.reduce(
  (acc, item, index, array) => {
    let createSum = { ages: acc.ages + item.age, names: acc.names + item.name };
    if (array.length - 1 > index) {
      createSum.names += ",";
    }
    return createSum;
  },
  { ages: 0, names: "" }
);
export { fedorenka };
