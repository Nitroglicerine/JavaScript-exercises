export function diagramCreator(value,...args) {
  const valueTrue = "______";
  const valueTrueColumn = "|    |";
  const valueFalse = "......";
  let Scalecolum = " ^ ";
  const diagramArray = [...args];

  for (let iterator = value; iterator >= 0; iterator--) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === iterator) {
        diagramArray[i] = valueTrue;
      } else if (args[i] > iterator) {
        diagramArray[i] = valueTrueColumn ;
      } else {
        diagramArray[i] = valueFalse;
      }
    }

    if (iterator !== value) {
      Scalecolum = " | ";
    }

    console.log(diagramArray + Scalecolum + iterator);
  }
}

//diagramCreator(25,10, 21, 7, 23, 4, 18 , 7, 9);



