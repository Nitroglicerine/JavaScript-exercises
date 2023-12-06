const arr = [1, -3, 9, -7, -12, 5];

const arr2 = arr.filter((item) => {
  if (item >= 0) {
    return true;
  }
});

//console.log(arr2);

export function ggeq(...args) {
  if (args.length == undefined) {
    return;
  } else {
    return console.log("wf");
  }
}
