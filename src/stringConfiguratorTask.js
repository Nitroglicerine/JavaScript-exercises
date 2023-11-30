const usersArrOne = []
const usersArrTwo = ["Semen"]
const usersArrTree = ["Semen", "Vasyl"]
const usersArrFour = ["Vasyl", "Petro", "Mykola"]
const usersArrFive = ["Vasyl", "Petro", "Mykola", "Ivan"]

function checkUsers(array) {

  if (array.length === 0) {
    return "no one likes this"
  }
  else if (array.length === 1) {
    return `${array} ${"likes this"}`
  }
  else if (array.length === 2) {
    return `${array[0]} and ${array[1]} ${"likes this"}`
  }
  else if (array.length === 3) {
    return `${array[0]}, ${array[1]} and ${array[2]} ${"likes this"}`
  }
  else {
    return `${array[0]}, ${array[1]} and ${array.length - 2} ${"others likes this"}`
  }

}
export{checkUsers}