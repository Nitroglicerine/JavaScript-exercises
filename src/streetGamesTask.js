const fedorenkaStreetGames = [
  { name: "lyoha Yarovyi", botlesBeer: 15, smokeJoints: 27, drugsDoppings: 11 },
  { name: "Mykola Dmytrenko", botlesBeer: 3, smokeJoints: 0, drugsDoppings: 1 },
  {
    name: "Oksana Leshchenko",
    botlesBeer: 12,
    smokeJoints: 37,
    drugsDoppings: 87,
  },
  {
    name: "Oleg Pidlisnyi",
    botlesBeer: 35,
    smokeJoints: 57,
    drugsDoppings: 11,
  },
];

export function streetGamesScore(fedorenka) {
  const createValueObj = fedorenka.map((item) => {
    const createObj = { name: "s", score: 0 };
    createObj.name = item.name;
    createObj.score =
      item.botlesBeer * 5 + item.smokeJoints * 3 + item.drugsDoppings * 2;

    return createObj;
  });
  const sortedStreetGamesWinners = createValueObj.sort((a, b) => {
    // if (a.score !== b.score) { return a.score - b.score } else { return a.name - b.name }
    let f = a.score !== b.score ? a.score - b.score : a.name - b.name;
  });

  return sortedStreetGamesWinners;
}
