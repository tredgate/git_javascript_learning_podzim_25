// javascript/conditions/
// alcohol_eligibility.js
const actualAge = "dva";
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`); // ? CZ Windows: pravý alt + ý, ALT + 96 (NUM), Mac: SHIFT + klávesa buď napravo od levého shiftu nebo nalevo od enteru, dolar $: pravý alt + ů
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol, chybí mu/jí ${
      drinkingAgeLimit - actualAge
    } roků/let.`
  );
} else {
  console.log("CHYBA: actualAge musí být větší nebo roven 0");
}
