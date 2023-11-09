import Car  from './transport/Car.js'
import  Jet  from './transport/Jet.js'

const firstValueObj = new Car();
const secondValueObj = new Car(
  "daihatsu",
  2000,
  new Set().add("ABS"),
  {
    name: "D",
    lastname: "Biggy",
  },
  false
);

const firstJetObj = new Jet(
  "LuftHansa",
  "Boeing",
  1992,
  false,
  "1-st class",
  true
);

firstValueObj.setDamage();


