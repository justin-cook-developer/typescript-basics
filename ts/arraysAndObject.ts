const nums: number[] = [1, 2, 3];

const strings: string[] = ["hello", "hi"];

// interface Person {
//   name: string;
//   age: number;
// }

const person: Person = {
  name: "Justin Cook",
  age: 22,
};

const people: Person[] = [person, { name: "Ethan", age: 21 }];

let makePeople: (name: string, age: number) => Person;

makePeople = (name: string, age: number): Person => {
  return {
    name,
    age: 22,
  };
};
