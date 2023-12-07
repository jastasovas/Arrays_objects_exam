//------------------------------------ Unit 1 --------------------------------------

// const firstArray = [1, 2, 3, 4, 5];
// const secondArray = new Array("vienas", "du", "trys", "keturi", "penki");
// const thirdArray = [];
// thirdArray[0] = 5;
// thirdArray[1] = 4;
// thirdArray[2] = 3;
// thirdArray[3] = 2;
// thirdArray[4] = 1;

// console.log(firstArray);
// console.log(secondArray);
// console.log(thirdArray);

//------------------------------------ Unit 2 --------------------------------------

// const myGrades = [4, 5, 8, 6, 10, 9, 7, 9, 2, 8];

// const sumAndAverageOfGrades =
//   myGrades.reduce((acc, grade) => acc + grade, 0) / myGrades.length;
// console.log(sumAndAverageOfGrades);

//------------------------------------ Unit 3 --------------------------------------

// const secondArray = ["vienas", "du", "trys", "keturi", "penki"];
// const reversedArray = [];

// for (let i = 0; i < secondArray.length; i++) {
//   reversedArray[i] = secondArray[i].split("").reverse().join("");
// }
// console.log(reversedArray);

//------------------------------------ Unit 4 --------------------------------------

// const arrayOne = ["vienas", "du"];
// const arrayTwo = ["masyvai", "kartu"];

// const hamburgerArray = arrayOne.concat(arrayTwo).join(" ");

// console.log(hamburgerArray);

//------------------------------------ Unit 5 --------------------------------------

// const threeDimensionsArr = [1, [3, [7, 6]], 8, [[6, [3], 11]], 9];
// const oneDimensionArray = threeDimensionsArr.flat(Infinity);
// console.log(oneDimensionArray);

// const secondThreeDimensionsArr = [1, [3, [7, 6]], 8, [[6, [3], 11]], 9];

//------------------------------------ Unit 6 --------------------------------------

// const myArray = [1, "du", 3, "keturi"];
// myArray.unshift("nulis"); //pridejimas i pradzia
// myArray.push(5); //pridejimas i pabaiga
// myArray.splice(2, 2); //pasalina nuo antro indekso du elementus
// console.log(myArray);

//------------------------------------ Unit 7 --------------------------------------

// const myNumbs = [5, 2, 20, -2, 8, 10, 3, 100, 44, 2];
// myNumbs.sort((a, b) => a - b); // nuo maziausio iki didziausio
// const uniqueArray = new Set(myNumbs);
// Array.from(uniqueArray); //nepasikartojantys
// console.log(myNumbs);
// console.log(uniqueArray);

//------------------------------------ Unit 8 --------------------------------------
//Sukuriau vienu budu ir nezinau ar gerai destruktizavau..
// let animal = {
//   dog: {
//     name: "Amsalas",
//     age: 3,
//     vaccinations: {
//       first: "rabies",
//       second: "covid",
//     },
//   },
//   cat: {
//     name: "Meuw",
//     age: 2,
//     vaccinations: {
//       first: "no",
//       second: "noo",
//     },
//   },
//   bird: {
//     name: "John",
//     age: 6,
//     vaccinations: {
//       first: "aha",
//       second: "ne",
//     },
//   },
//   snake: {
//     name: "boo",
//     age: 11,
//     vaccinations: {
//       first: "no",
//       second: "no",
//     },
//   },
//   rat: {
//     name: "Mike",
//     age: 3,
//     vaccinations: [1, 2, 3],
//   },
// };

// console.log(animal.cat.name);

//------------------------------------ Unit 9 nepadarytas!! --------------------------------------

// const questions2 = [
//   {
//     id: 1,
//     question: "HTML tai",
//     answers: [
//       {
//         text: "Programavimo kalba tinklapio interaktyvumui kurti",
//         isCorrect: false,
//       },
//       { text: "Tinklapio apipavidalinimą aprašanti kalba", isCorrect: false },
//       { text: "Tinklapio struktūrą aprašanti kalba", isCorrect: true },
//     ],
//   },
//   {
//     id: 2,
//     question: "Kuris kodas teisingai aprašo HTML lentelės eilutę?",
//     answers: [
//       {
//         text: "<tr><td>Vardas</td><td>Pavardė</td><td>Telefonas></td></tr>",
//         isCorrect: true,
//       },
//       {
//         text: "<td><tr>Vardas</tr><tr>Pavardė</tr><tr>Telefonas></tr></td>",
//         isCorrect: false,
//       },
//       {
//         text: "<row><cell>Vardas</cell><cell>Pavardė</cell><cell>Telefonas></cell></row>",
//         isCorrect: false,
//       },
//     ],
//   },
//   {
//     id: 3,
//     question: "Koks HTML elementas aprašo tinklapio bloką?",
//     answers: [
//       { text: "<span>", isCorrect: false },
//       { text: "<p>", isCorrect: false },
//       { text: "<h2>", isCorrect: false },
//       { text: "<hr>", isCorrect: false },
//       { text: "<div>", isCorrect: true },
//       { text: "Nėra teisingo atsakymo", isCorrect: false },
//     ],
//   },
//   {
//     id: 4,
//     question:
//       "Koks CSS matavimo vienetas naudojamas, kad HTML blokas prisitaikytų prie ekrano pločio?",
//     answers: [
//       { text: "px", isCorrect: false },
//       { text: "em", isCorrect: false },
//       { text: "%", isCorrect: true },
//     ],
//   },
//   {
//     id: 5,
//     question:
//       "Kaip priskirti nav bloke sąrašo būdu aprašytas nuorodas kintamajam,kurio pavadinimas nuorodos?",
//     answers: [
//       {
//         text: "var nuorodos = document.querySelector('nav nuorodos');",
//         isCorrect: false,
//       },
//       {
//         text: "var nuorodos = document.querySelector('nav li a');",
//         isCorrect: true,
//       },
//       { text: "var nuorodos = .getByElements('nav li a');", isCorrect: false },
//       { text: "const nuorodos = querySelector('nav li a');", isCorrect: false },
//       { text: "Teisingo atsakymo nėra", isCorrect: false },
//     ],
//   },
//   {
//     id: 6,
//     question: "Kurie iš kintamųjų yra masyvai?",
//     answers: [
//       {
//         text: "var pastraipos = document.querySelector('p');",
//         isCorrect: false,
//       },
//       { text: "var tekstai = document.getByElements('p');", isCorrect: false },
//       {
//         text: "var patarimai = document.querySelectorAll('p');",
//         isCorrect: true,
//       },
//       { text: "var pastraipos = document.intoArray('p);", isCorrect: false },
//       { text: "Nėra teisingo atsakymo", isCorrect: false },
//     ],
//   },
//   {
//     id: 7,
//     question:
//       "Kaip sukurti naują li elementą esančiame ul elemente, kuris turi klasę pageidavimai?",
//     answers: [
//       {
//         text: "var list = document.querySelector('ul.pageidavimai'); var listItem = document.create('li'); list.appendChild(listItem);",
//         isCorrect: false,
//       },
//       {
//         text: "var list = document.querySelector('ul .pageidavimai'); var listItem = document.createElement('li'); list.appendChild(listItem);",
//         isCorrect: true,
//       },
//       {
//         text: "var list = document.querySelector('ul.pageidavimai'); var listItem = document.createElement('li'); list.append(listItem);",
//         isCorrect: false,
//       },
//       { text: "Nėra teisingo atsakymo", isCorrect: false },
//     ],
//   },
//   {
//     id: 8,
//     question: "Kas yra preprocesorius?",
//     answers: [
//       { text: "Naujas CSS dialektas", isCorrect: false },
//       { text: "CSS 5 versija", isCorrect: false },
//       {
//         text: "Skriptų rašymo kalba, kuri išplečia CSS ir leidžia kompiliuoti kodą į standartinį HTML ir CSS kodą",
//         isCorrect: false,
//       },
//       {
//         text: "Skriptų rašymo kalba, kuri išplečia CSS ir leidžia kompiliuoti kodą į standartinį CSS kodą",
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     id: 9,
//     question: "Pažymėkite, kuris iš pateiktų variantų nėra TVS",
//     answers: [
//       { text: "WordPress", isCorrect: false },
//       { text: "Drupal", isCorrect: false },
//       { text: "Bootstrap", isCorrect: true },
//       { text: "ImpressPage", isCorrect: false },
//     ],
//   },
//   {
//     id: 10,
//     question: "Kuris iš pavyzdžių yra arow funkciją",
//     answers: [
//       {
//         text: "function (a, b){\n" + " return a + b + 100;}\n",
//         isCorrect: false,
//       },
//       {
//         text: "function (a, b) => {\n" + " return a + b + 100;}\n",
//         isCorrect: false,
//       },
//       { text: "(a, b) => a + b + 100;", isCorrect: true },
//       { text: "Nėra teisingo atsakymo", isCorrect: false },
//     ],
//   },
//   {
//     id: 11,
//     question:
//       "let kiekis = 10;  \n" +
//       "console.log(kiekis++); \n" +
//       "Ką išves konsolėje?",
//     answers: [
//       { text: "10", isCorrect: true },
//       { text: "11", isCorrect: false },
//       { text: "undefined", isCorrect: false },
//       { text: "Nieko", isCorrect: false },
//       { text: "Nėra teisingo atsakymo", isCorrect: false },
//     ],
//   },
//   {
//     id: 12,
//     question:
//       "Ką matysime konsolėje užrašius šį kodą: \n" +
//       "let foto = ['Overlay', 'Overlay1', 'Overlay2', 'Overlay3'];\n" +
//       "let naujas = foto;\n" +
//       "console.log(naujas);",
//     answers: [
//       { text: "undefined", isCorrect: false },
//       { text: "foto", isCorrect: false },
//       {
//         text: "['Overlay', 'Overlay1', 'Overlay2', 'Overlay3']",
//         isCorrect: true,
//       },
//       { text: "Nieko", isCorrect: false },
//       { text: "Nėra teisingo atsakymo", isCorrect: false },
//     ],
//   },
//   {
//     id: 13,
//     question:
//       "Ką atspausdins konsolėje : \n" +
//       "function labas(a) {    \n" +
//       "return a;\n" +
//       "} \n" +
//       "console.log(labas(1))",
//     answers: [
//       { text: "undefined", isCorrect: false },
//       { text: "labas(1)", isCorrect: false },
//       { text: "1", isCorrect: true },
//       { text: "a", isCorrect: false },
//       { text: "Nieko", isCorrect: false },
//     ],
//   },
// ];

//------------------------------------ Unit 10--------------------------------------

let knygos = [
  {
    isbn: 9786098233346,
    price: 7.99,
    year: 2006,
    title: "Bloga dukte",
    pagecount: 250,
    genre: ["drama", "family", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786098233391,
    price: 7.99,
    year: 2015,
    title: "Mergina kuria jis pazinojo",
    pagecount: 315,
    genre: ["romantic", "drama"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786099609324,
    price: 7.99,
    year: 2019,
    title: "Tapk ragana",
    pagecount: 150,
    genre: ["leisure", "family", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094792250,
    price: 6.99,
    year: 2007,
    title: "Sfera",
    pagecount: 450,
    genre: ["sci-fi", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094792335,
    price: 9.99,
    year: 2019,
    title: "Mes susitinkame cia",
    pagecount: 500,
    genre: ["sci-fi", "romantic", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094273780,
    price: 7.99,
    year: 2019,
    title: "Sunaikinimas",
    pagecount: 509,
    genre: ["sci-fi"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786098233483,
    price: 12.99,
    year: 2018,
    title: "Artemide",
    pagecount: 199,
    genre: ["romantic", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094273872,
    price: 4.99,
    year: 2015,
    title: "Fondas ir imperija",
    pagecount: 185,
    genre: ["sci-fi", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094273902,
    price: 7.99,
    year: 2019,
    title: "Amzinybes fjordo pranasai",
    pagecount: 333,
    genre: ["science", "mystic"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094442742,
    price: 5.99,
    year: 2004,
    title: "Bejegiai",
    pagecount: 777,
    genre: ["drama", "science"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786094442940,
    price: 14.99,
    year: 2019,
    title: "Klajunai",
    pagecount: 172,
    genre: ["romantic", "family"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
  {
    isbn: 9786090404386,
    price: 7.99,
    year: 2015,
    title: "Mergina, kuri pakliuvo i voratinkli",
    pagecount: 356,
    genre: ["leisure", "horror"],
    heroes: {
      hero1: "Alfa",
      hero2: "Bravo",
      hero3: "Delta",
    },
  },
];

//-------------- 10.1 ----------------------------
const newBooksArray = [];
const genreArray = [];
for (let book in knygos) {
  if (knygos[book].year < 2015) {
    newBooksArray.push(knygos[book].title);
  }
}
console.log(newBooksArray);
