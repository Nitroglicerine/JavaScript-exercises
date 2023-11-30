function createPhoneNum() {
  let arrPhoneNum;
  do {
    arrPhoneNum = +prompt("your phone number", ["enter here"]);
    if (isNaN(arrPhoneNum)) {
      alert("Пашол НАХУЙ");
    } else if (arrPhoneNum === 0) {
      return;
    }
  } while (isNaN(arrPhoneNum));
  let arrLght = arrPhoneNum.length;
  do {
    arrPhoneNum = arrPhoneNum.toString();
    if (arrLght > 10 || arrLght < 5) {
      alert("Пашол НАХУЙ");
    }
  } while (arrLght > 10 || arrLght < 5);
  return alert(newPhoneFormate(arrPhoneNum));
}

function newPhoneFormate(arrNum) {
  return `(${arrNum.slice(0, 3)}) ${arrNum.slice(3, 6)}-${arrNum.slice(6)}`;
}
export{createPhoneNum}