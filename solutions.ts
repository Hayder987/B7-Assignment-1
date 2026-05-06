
// Problem 1
type NumberArr = number[];

function filterEvenNumbers(numbers: NumberArr): NumberArr {
  return numbers.filter(num => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])


// Problem 2
function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

reverseString("typescript");


