interface NamedPerson {
   firstName: string;
   age?: number;
   [propName: string]: any;
   greet(lastName: string): void;
}

function greet(person: NamedPerson) {
   console.log(`Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
   person.firstName = "Ellen";
}

const person = {
   firstName: "Charles",
   // age: 22,
   hobbies: ["Cooking", "Sports"],
   greet(lastName: string) {
      console.log(`Hello, ${this.firstName} ${lastName}`);
   }
};

// greet({ firstName: "Max", age: 27 });
changeName(person);
greet(person);
person.greet("Nicoletti");

class Person implements NamedPerson {
   firstName: string;
   lastName: string = "";
   greet(lastName: string) {
      console.log(`Hello, ${this.firstName} ${lastName}`);
   }

   constructor(firstName: string) {
      this.firstName = firstName;
   }
}

const guy = new Person("Chucky");
guy.greet("Cheese");
guy.lastName = "Smith";
guy.greet(guy.lastName);
greet(guy);


// Function Types

interface DoubleValueFunc {
   (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
   return (value1 + value2) * 2;
}

console.log(`double it: ${myDoubleFunction(10, 20)}`);


// Interface inheritance 

interface AgedPerson extends NamedPerson {
   age: number;
}

const oldPerson: AgedPerson = {
   age: 22,
   firstName: "Chas",
   greet(lastName: string) {
      console.log("Hi!");
   }
};

console.log(oldPerson);
