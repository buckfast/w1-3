"use strict";

const chars = ".,?;!";
const vowels = "aeiouyäö";
const consonants = " dghjklmnprstvbcfqšwxz";

fetch("linus.txt")
.then((response) => {
    response.text().then((text) => {

      let textArray = text.split("");
      let filtered = textArray.filter(c => !chars.includes(c));
      console.log(filtered.join(""));


      let textArray2 = text.split(" ");
      let filtered2 = textArray2.filter(s => s[0] == 'A');
      console.log(filtered2.join(" "));


      let filtered3 = textArray2.filter(s => s[0].toLowerCase() == 'a');
      console.log(filtered3.join(" "));


      console.log(textArray2.length);


      let filtered4 = textArray.filter(c => !vowels.includes(c));
      console.log(filtered4.join(""));


      console.log(filtered.filter(c => consonants.includes(c)).length);
    });
});
