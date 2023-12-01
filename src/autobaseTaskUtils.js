export function addInBase(a, newarray) {
  newarray.push(a);
  return newarray;
}

export function caseRepear(x) {
  return x.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

