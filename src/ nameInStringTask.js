export function nameInStr(arg1, arg2) {
  let arr1 = [];
  let test;
  for (let i = 0; i < arg2.length; i++) {
    test = arg1.indexOf(arg2[i], test);
    if (test !== -1) {
      arr1.push(test);
    }
  }

  if (arr1.length != arg2.length) {
    return false;
  }
  return true;
}

//console.log(nameInStr("Across the rivers", "chris"));
