// 6 kyu
// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to
// one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = function (n) {
  const nBinary = n.toString(2);
  const nArray = nBinary.split("");
  const nArrayInt = nArray.map(function (x) {
    return parseInt(x, 10);
  });
  const sum = nArrayInt.reduce((acc, current) => acc + current, 0);
  return sum;
};

countBits(6523184790);
