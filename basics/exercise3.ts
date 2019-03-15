class Person {
   // default scope is public
   name: string;
   public state: string = "";
   private type: string = "";
   protected age: number;

   constructor(name: string, public userName: string) {
      this.name = name;
      this.userName = userName;
      this.age = 12; // initialize
   }

   getFirst() {
      return this.name;
   }

   getAge() {
      console.log(this.age);
   }

   setType(type: string) {
      this.type = type;
   }

   getType(): string {
      return this.type;
   }
}

const person = new Person('Charles', "charles");

console.log(person);

class Charles extends Person {
   constructor(userName: string) {
      super("Charles", userName);
   }
}

const charles = new Charles("charles");

console.log(charles);

class Plant {
   private _species: string = "";

   set species(value: string) {
      if (value.length > 3) {
         this._species = value;
      } else {
         this._species = "default";
      }
   }

   get species(): string {
      return this._species;
   }
}

var plant = new Plant();
plant.species = "AAA";

console.log(plant);

class Helpers {
   static PI: number = 3.1415;
   static circumference(dia: number): number {
      return this.PI * dia;
   }
}

console.log(2 * Helpers.PI);
console.log(Helpers.circumference(10));

// abstract
abstract class Project {
   projectName: string = "";
   budget: number;

   constructor() {
      this.budget = 0;
   }

   abstract changeName(name: string): this;

   calcBudget(): number {
      return this.budget;
   }
}

class ITProject extends Project {
   changeName(name: string): this {
      this.projectName = name;
      return this;
   }
}

console.log(new ITProject().changeName("bruce"));

// singleton 1
class OnlyOne {
   private static instance: OnlyOne = new OnlyOne('Singleton');
   private constructor(public name: string) {}

   static getInstance() {
      return OnlyOne.instance;
   }
}

console.log(OnlyOne.getInstance());

// singleton 2
class OtherOnlyOne {
   private static instance: OtherOnlyOne;
   private constructor(public name: string) {}

   static getInstance() {
      if (!OtherOnlyOne.instance) {
         OtherOnlyOne.instance = new OtherOnlyOne('Singleton');
      }
      return OtherOnlyOne.instance;
   }
}

console.log(OtherOnlyOne.getInstance());
