export function testWawe1(test) {
  const resultArr = [];

  for (let i = 0; i < test.length; i++) {
    const createUpperLetter = test[i].toUpperCase();
    const firstPartStr = test.slice(0, i);
    const lastPartStr = test.slice(i + 1);

    resultArr.push(firstPartStr + createUpperLetter + lastPartStr);
  }

  return resultArr;
}

//console.log(testWawe1("zalupaklan"));