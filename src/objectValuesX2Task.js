let menu = {
  title: "My menu",
  width: 200,
  height: 300,
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
    }
  }

  return menu;
}
export {menu,multiplyNumeric}