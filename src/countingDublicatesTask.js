export function dublicateReturn(arg) {
  const dublicateLowercase = arg.toLowerCase();
  const set = new Set();

  for (let i = 0; i < dublicateLowercase.length; i++) {
    for (let x = 0; x < i; x++) {
      if (dublicateLowercase[i] == dublicateLowercase[x]) {
        set.add(x);
        set.add(i);
      }
    }
  }

  const setToArray = Array.from(set).map((item) => {
    return dublicateLowercase.charCodeAt(item);
  });
  const result = setToArray.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;

    return acc;
  }, {});

  for (let key in result) {
    console.log(`${String.fromCharCode(key)}  occurs  ${result[key]} times`);
  }
}

// dublicateReturn("Indivisibilities");
