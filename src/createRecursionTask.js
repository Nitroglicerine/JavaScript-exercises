let num = 0;
function createNewRecursion() {
  num++;
  if (num > 50) {
    return num;
  }
  createNewRecursion();
}
//   console.log(createNewRecursion())

function backRecursion(arg3) {
  if (arg3 === 1) {
    return arg3;
  } else {
    return arg3 + backRecursion(arg3 - 1);
  }
}
// console.log(backRecursion(5));
export {createNewRecursion,backRecursion}