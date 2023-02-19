// 5 kyu
// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const splitted2 = [];
  str.split(" ").forEach((word) => {
    if (!word.match(/[!.?]/g))
      splitted2.push(word.substring(1) + word.substring(0, 1) + "ay");
    else splitted2.push(word);
  });
  return splitted2.join(" ");
}
pigIt("Quis custodiet ipsos custodes ?");
