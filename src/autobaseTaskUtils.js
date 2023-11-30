function addInBase(a, newarray) {
  newarray.push(a);
  return newarray;
}

function caseRepear(x) {
  return x.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}
export { addInBase, caseRepear };
