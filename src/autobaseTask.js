
import { addInBase,caseRepear } from "./autobaseTaskUtils.js";

// while (confirm("Додати ще авто ?") == true) {
//   addInBase(createAuto(), newarray);
// }
const newarray = [];
export function createAuto() {
  let autoBase = {
    carBrand: "vehicleBrand",
    gearBoxAutomatic: true,
    productionYear: 1984,
    clientName: "Sidor",
  };

  autoBase.carBrand = prompt("Марка авто", ["Toyota"]);

  autoBase.carBrand = caseRepear(autoBase.carBrand);

  do {
    autoBase.productionYear = +prompt("Рік випуску", [2022]);

    if (autoBase.productionYear <= 1900 || autoBase.productionYear > 2023) {
      alert("Пашол НАХУЙ");
    }
  } while (autoBase.productionYear <= 1900 || autoBase.productionYear > 2023);
  autoBase.gearBoxAutomatic = confirm("Коробка автомат?");
  do {
    autoBase.clientName = prompt("Імʼя власника", ["Білан"]);

    autoBase.clientName = caseRepear(autoBase.clientName);

    if (typeof autoBase.clientName !== "string") {
      alert("Пашол Нахуй");
    }
  } while (typeof autoBase.clientName !== "string");

  return autoBase;
}
// addInBase(createAuto(), newarray);
