
// Problem 1
type NumberArr = number[];

const filterEvenNumbers = (numbers: NumberArr): NumberArr => {
  return numbers.filter(num => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])


// Problem 2
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
}

reverseString("typescript");


// Problem 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}


console.log(checkType("Hello"))

console.log(checkType(88))




