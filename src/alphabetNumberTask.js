const strValue = "Федір кончений лох"
const arrOfLetters = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "i", "ї", "й", "к", "л", "м", "н",
  "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"]
export function foundLettersNum(strValue, arrLett) {
  const sortArr = []
  let strToArr = strValue.toLowerCase().split("")

  for (let i = 0; i < strToArr.length; i++) {
    for (let count = -1; (count = arrLett.indexOf(strToArr[i], count + 1)) !== -1;) {
      sortArr.push(count + 1);
    }
  }
  return sortArr.join(" ")
}

