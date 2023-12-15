export function setStrValue(str) {
  let resultString = "";
  let resValue;

  if (typeof str === "string") {
    for (let i = 0; i < str.length; i++) {
      str[i] !== " "
        ? (resValue = str.charCodeAt(i) - 1)
        : (resValue = str.charCodeAt(i));

      resultString += String.fromCharCode(resValue);
    }
  } else {
    return "Input is not a string";
  }

  return resultString;
}
//   console.log(setStrValue("Uif usjdl up uijt lbub"));
