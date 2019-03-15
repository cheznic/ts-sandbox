// simple generic
function echo(data: any) {
   return data;
}

console.log(echo("Charles"));
console.log(echo(27));
console.log(echo({ name: "Charles", age: 27 }));

// improved generic
function betterEcho<T>(data: T) {
   return data;
}

console.log(betterEcho("Charles"));
console.log(betterEcho(27));
console.log(betterEcho({ name: "Charles", age: 27 }));

// built-in generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.78);
// testResults.push("asdf");
console.log("First item:", testResults.reverse().pop());

// Arrays
function printAll<T>(args: T[]) {
   args.forEach((element) => console.log(element));
}

printAll<string>(["apple", "pear"]);

// wrapping a weak generic with better generic
const echo2: <T>(data: T) => T = echo;

console.log(echo2<string>("Sally"));

// Generic class
class Multiplier<U extends string | object, T extends number> {
   v1: T;
   v2: T;

   constructor(val1: T, val2: T) {
      this.v1 = val1;
      this.v2 = val2;
   }

   calc(): number {
      return this.v1 * this.v2;
   }

   print(label: U) {
      console.log(label + ":", this.calc());
   }
}

(new Multiplier(3, 4)).print("result");

// solution

class MyMap<T> {
   a = new Array();

   put(key: string, value: T) {
      this.a.push([key, value])
   }

   get(key: string): T | null {

      for (let i = 0; i < this.a.length; i++) {
         if (this.a[i][0] == key)
            return this.a[i][0];
      }
      return null;
   }

   clear() {
      this.a.length = 0;
   }

   print() {
      for (let i = 0; i < this.a.length; i++) {
         console.log(this.a[i]);
      }
   }
}

const numberMap = new MyMap<number>();
numberMap.put('apples', 5);
numberMap.put('bananas', 10);
numberMap.print();

const stringMap = new MyMap<string>();
stringMap.put('name', "Max");
stringMap.put('age', "27");
stringMap.print();

class ES5Map<T> {
   private map: { [key: string]: T } = {};

   put(key: string, item: T) {
      this.map[key] = item;
   }

   get(key: string): T {
      return this.map[key];
   }

   clear() {
      this.map = {};
   }

   values(): T[] {
      let a = new Array<T>();

      for (let key in this.map) {
         a.push(this.map[key])
      }
      return a;
   }

   keys(): string[] {
      let a = new Array<string>();

      for (let key in this.map) {
         a.push(key)
      } return a;
   }

   print() {
      for (let key in this.map) {
         console.log(key, this.map[key]);
      }
   }
}

const nm = new ES5Map<number>();
nm.put('pears', 5);
nm.put('cookies', 10);
nm.print();
console.log('values:', nm.values());
console.log('keys:', nm.keys());

const sm = new ES5Map<string>();
sm.put('name', "Charles");
sm.put('age', "53");
sm.print();
console.log('values:', sm.values());
console.log('keys:', sm.keys());

// sudo map in vanilla JS
// let m = {};
// m[1] = "this";
// m[1] = "that";
// m["key"] = "the other";
// console.log(m);

