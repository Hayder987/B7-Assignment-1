
// Problem 1
type NumberArr = number[];

const filterEvenNumbers = (numbers: NumberArr): NumberArr => {
  return numbers.filter((num) => num % 2 === 0);
};



// Problem 2
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};


// Problem 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};



// problem 4
const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};



// problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};




// Problem 6
class Person {
  name: string;
  age: number;

  constructor(
    name: string,
    age: number,
  ) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
    grade : string;
  constructor(
    name: string,
    age: number,
    grade: string,
  ) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



// Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter(value => arr2.includes(value));
}
