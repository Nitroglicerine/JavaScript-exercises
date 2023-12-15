export function diagramCreator(...args) {
  let scalecolumn = " ^ ";
  const diagramArray = [...args];

  for (let iterator = 10; iterator >= 0; iterator--) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === iterator) {
        diagramArray[i] = " ____ ";
      } else if (args[i] > iterator) {
        diagramArray[i] = "|    |";
      } else {
        diagramArray[i] = "......";
      }
    }

    iterator !== 10 ? (scalecolumn = " | ") : scalecolumn;

    console.log(diagramArray.join("") + scalecolumn + iterator);
  }
}

diagramCreator(10, 3, 7, 1, 4, 5, 7, 9);
