// Exercise 1 - How was your TypeScript Class?
class Car {
   name: string;
   acceleration: number = 0;

   constructor(name: string) {
      this.name = name;
   }

   honk(): void {
      console.log('Tooooot');
   }

   accelerate(speed: number): void {
      this.acceleration += speed;
   }
}

var car = new Car("BMW");
car.honk();
car.accelerate(10);
car.accelerate(10);
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class Shape {
   width: number = 0;
   length: number = 0;

   constructor(length: number, width: number) {
      this.length = length;
      this.width = width;
   }
}

class Rectangle extends Shape {
   area(): number {
      return this.width * this.length;
   }
}

var rectangle = new Rectangle(6, 5);
console.log(rectangle.area());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Human {
   private _firstName: string = "";
   enumerable: boolean = true;
   configurable: boolean = true;

   get firstName(): string {
      return this._firstName;
   }

   set firstName(name: string) {
      if (name.length > 3) {
         this._firstName = name;
      } else {
         this._firstName = "default";
      }
   }
}

let man = new Human();
man.firstName = "Joe";
console.log(man.firstName);
man.firstName = "Joe Ma Ma";
console.log(man.firstName);