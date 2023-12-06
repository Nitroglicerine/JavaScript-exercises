export function testWawe1(test) {
  let count = [];

  for (let i = 0; i < test.length; i++) {
    const createStr = test[i].toUpperCase();
    const letter = test.substr(0, [i]);
    const backLetter = test.slice(i + 1);

    count.push(letter + createStr + backLetter);
  }

  return count;
}

console.log(testWawe1("zalupaklan"));