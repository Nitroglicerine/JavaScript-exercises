const bitCount = 1234;

function bitReverse(count) {
  if (count >= 0) {
    let value = count.toString(2);
    let counter = 0;

    for (let i = 0; i < value.length; i++) {
      let r = +value[i];
      counter = counter + r;
    }
    return counter;
  } else {
    return "please insert number more 0";
  }
}
export{ bitReverse}