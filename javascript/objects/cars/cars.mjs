import { CarBlueprint } from "./car_blueprint.mjs";

const dieselCar = new CarBlueprint("Červená", "1.6 TDI", "Diesel", "Ropák");
dieselCar.logCarProperties();
const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();
dieselCar.logCarProperties();
electricCar.repaint("Stříbrná");
electricCar.logCarProperties();
dieselCar.logCarProperties(); // ? Ověření, že přebarvení neproběhlo na jiném autě než electricCar

const carColor = dieselCar.getColor(); // ? Vezme výsledek getColor() a uloží ho do proměnné

console.log("Barva auta: " + carColor);
