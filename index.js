let newArray = [
  { age: 47, name: "Semen", password: "qwertys123", autorisation: true },
];
let createQuestion = prompt("Tell your name", ["Denis"]);
newArray.find((item) => {
  if (item == createQuestion) {
    return true;
  }
});
