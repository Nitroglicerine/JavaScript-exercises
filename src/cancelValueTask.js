export function deleteCount(text) {
  let resultText;

  for (let index = 0; index < text.length; index++) {
    let firstString = text.slice(0, text.indexOf("("));
    let lastString = text.slice(text.indexOf(")") + 1);
    resultText = firstString + lastString;
  }

  return resultText;
}
// console.log(deleteCount(`example(unwanted thing)example`));
