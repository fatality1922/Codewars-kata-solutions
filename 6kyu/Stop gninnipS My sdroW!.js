//  6kyu
//  Stop gninnipS My sdroW!

//  Write a function that takes in a string of one or more words, and
//  returns the same string, but with all five or more letter words
//  reversed (Just like the name of this Kata). Strings passed in will
//  consist of only letters and spaces. Spaces will be included only
//  when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  let splittedWord = string.split(" ");
  var result = [];
  for (word of splittedWord) {
    if (word.length >= 5) {
      result.push(word.split("").reverse().join(""));
    } else result.push(word);
  }
  result = result.toString();
  let resultWithSpaces = result.replace(/,/g, " ");
  return resultWithSpaces;
}

// console.log(spinWords("Welcome saas sa 123556"));
