"use strict";

const villains = [
    { number: 1,  villain: "Dr. Julius No",         year: 1962, movie: "Dr No" },
    { number: 2,  villain: "Ernst Stavro Blofeld",  year: 1963, movie: "From Russia with Love" },
    { number: 3,  villain: "Auric Goldfinger",      year: 1964, movie: "Goldfinger" },
    { number: 4,  villain: "Emilio Largo",          year: 1965, movie: "Thunderball" },
    { number: 5,  villain: "Mr.Big",                year: 1973, movie: "Live and Let Die" },
    { number: 6,  villain: "Francisco Scaramanga",  year: 1974, movie: "The Man with the Golden Gun" },
    { number: 7,  villain: "Karl Stromberg",        year: 1977, movie: "The Spy Who Loved Me"},
    { number: 8,  villain: "Hugo Drax",             year: 1979, movie: "Moonraker"},
    { number: 9,  villain: "Aristotle Kristatos",   year: 1981, movie: "For Your Eyes Only"},
    { number: 10, villain: "General Gogol",         year: 1981, movie: "For Your Eyes Only"}
];

console.log("### 1");
const villains1970s = villains.filter((villain) => {
    return (villain.year >= 1970 && villain.year <= 1979);
});
for (let i=0; i<villains1970s.length; i++) {
  console.log(villains1970s[i].movie);
}


console.log("### 2");
const avg = villains.reduce((total, obj, i, villains) => {
  total.year+=obj.year;
  if (i===villains.length-1) {
    return total.year/villains.length;
  } else {
    return total;
  }
});
console.log(avg);


console.log("### 3");
const evillains = villains.filter(villain => {
  return villain.movie.toLowerCase().includes("e");
});
for (let i=0; i<evillains.length; i++) {
  console.log(evillains[i].villain);
}


console.log("### 4");
const longerThan15 = villains.filter(villain => villain.villain.length > 15);
console.log(longerThan15);


console.log("### 5");
var withoutNumbers = villains.map(obj => ({villain: obj.villain, movie: obj.movie}));
console.log(JSON.stringify(withoutNumbers));
