// javascript/values-and-variables
// variables.js
let firstName = "Petr"; // ? Deklarace a inicializace proměnné
let lastName; // ? Deklarace proměnné
lastName = "Fifka"; // ? Inicializace proměnné
// let lastName; // ! Není možné redeklarovat (znovu vytvořit proměnnou)
console.log(firstName);
console.log(firstName + " " + lastName); // ? Pokud chci přidat mezeru mezi texty, musím ji manuálně napsat do sloučení
firstName = "Alžběta";
console.log(firstName);
console.log(firstName);
console.log(firstName);
firstName = "Radka";
console.log(firstName);

{
  let blockedVariable = "test"; // ? Tato proměnná existuje jen v blok
  console.log(firstName);
}
// console.log(blockedVariable); // ! Vyhodí chybu: ReferenceError: blockedVariable is not defined

// * Proměnná const (konstanta)
const city = "Praha";
// city = "Brno"; // ? Const nemůžeme měnit
// const country; // ! Nebude fungovat, musí se deklarovat i inicializovat zároveň

// * Poznámky:

/*
Více
řádková
poznámka
*/

/**
 * **Tučně** - dokumentace
 *
 * ``` js
 * console.log("WOW!")
 * ```
 */
function doc() {}
