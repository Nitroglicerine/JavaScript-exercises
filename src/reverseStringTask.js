const reversedString = "Stop gninnipS My !sdroW"
export function newStr(str) {
  str = str.split(" ")
  const createNewStr = str.map((item) => {

    if (item.length > 5) {
      return item.split("").reverse().join("")
    }
    else { return item }
  })
  return createNewStr
}
