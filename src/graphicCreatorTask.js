export function diagramCreator(...args) {
  const valueTrue = "______";
  const valueTrueColumn = "|    |";
  const valueFalse = "......";
  let Scalecolum = " ^ ";
  const diagramArray = [...args];

  for (let iterator = 10; iterator >= 0; iterator--) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === iterator) {
        diagramArray[i] = valueTrue;
      } else if (args[i] > iterator) {
        diagramArray[i] = valueTrueColumn;
      } else {
        diagramArray[i] = valueFalse;
      }
    }

    if (iterator !== 10) {
      Scalecolum = " | ";
    }

    console.log(diagramArray + Scalecolum + iterator);
  }
}

diagramCreator(10, 3, 7, 1, 4, 5, 7, 9);
