export let createNum = 130890;

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

