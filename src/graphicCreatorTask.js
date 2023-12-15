export function diagramCreator(value, ...args) {
  let Scalecolum = " ^ ";
  const diagramArray = [...args];

  for (let iterator = value; iterator >= 0; iterator--) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === iterator) {
        diagramArray[i] = " ____ ";
      } else if (args[i] > iterator) {
        diagramArray[i] = "|    |";
      } else {
        diagramArray[i] = "......";
      }
    }

    iterator !== value ? (Scalecolum = " | ") : iterator;

    console.log(diagramArray.join("") + Scalecolum + iterator);
  }
}

//diagramCreator(25, 10, 21, 7, 23, 4, 18, 7, 9);
