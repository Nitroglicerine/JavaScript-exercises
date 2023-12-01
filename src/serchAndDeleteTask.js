const arrayCount = [1, 2, 3, 1, 1, 4]
const deleteArrValue = [1]

export function sortDoublesAndDelete(arrCount, deleteValue) {
  let createNewValue = arrCount.filter((item) => {

    if (item == deleteValue) { return false }
    return true
  })
  return createNewValue;
}
