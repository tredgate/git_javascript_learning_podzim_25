// javascript/objects/cars
// * car_blueprint.mjs // * Toto otevřeme
//cars.mjs // ? MJS = module JavaScript - pokud nenastavíme v projektu, musíme takto označovat soubory s objekty (třída)

export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4; // ? Hardcodovaná property (někdy magic numbers)
    this.logDivider();
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    ); // Escape Characters: \n, vypsání uvozovek v textu: "Petr řekl \"Budiž Escape Characters\""
  }

  logCarProperties() {
    this.logDivider();
    console.log(
      `Informace o autě: ${this.carName}: \n\t Motor: ${this.engine}, barva: ${this.color}, typ paliva: ${this.fuel}, počet kol: ${this.wheels}`
    );
  }

  logDivider() {
    console.log("-----------------------");
  }

  repaint(newColor) {
    this.logDivider();
    const oldColor = this.color;
    this.color = newColor;
    console.log(
      `Auto ${this.carName} bylo přebarveno z: ${oldColor} na: ${this.color}`
    );
  }

  getColor() {
    return this.color;
    // ! Po příkazu return končí metoda/funkce
    console.log("Toto se už nevypíše");
  }
}
