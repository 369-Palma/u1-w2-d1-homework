/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*Number: il valore assegnato alla variabile è un numero. La variabile è come un contenitore al suo interno c'è un numero.
Esempio:*/
let n1 = 6; /* Significa che il contenitore chiamato n1 contiene un numero. */

/*String: il valore assegnato alla variabile è una sequenza di caratteri/lettere. */
let n2 =
  "Badoglio"; /*Il contenitore n2 contiene delle lettere. Lo si riconosce dalla presenza delle virgolette /*

/*Boolean: il valore assegnato alla variabile è di tipo logico e può essere vero (true) o falso (false) . */
let n3 = true; /*Il contenitore n3 contiene un'informazione che può essere vera o falsa. */

/* Null: il valore assegnato alla variabile è vuoto, semplicemente non c'è.  */
let n4 = null; /*Il contenitore n5 esiste ma è vuoto.*/

/*Undefined: Il contenitore esiste ma il suo contenuto contiene qualcosa che non è stato definito*/
let n5;

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Palma";
console.log(typeof name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12;
let numero2 = 20;
let somma = (numero1 += numero2);
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Iacobelli";

console.log(name);

const nominativo = "Gino";
/* nominativo = "Francesco" */
console.log(nominativo); /*TypeError: Assignment to constant variable.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name1 = "john";
name2 = "John";
console.log(name1 !== name2);

/*verifica che name1 sia DIVERSO da name2 --> True */
console.log(
  name1 === name2
); /*verifica che name1 sia DIVERSO da name2 --> False */

console.log(name1.lowercase === name2.lowercase); /* --> True */
