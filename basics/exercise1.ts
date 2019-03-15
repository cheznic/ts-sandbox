type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
   money: 2000,
   deposit(value: number): void {
      this.money += value;
   }
};

type Customer = { name: string, account: BankAccount, hobbies: string[] }

let myself: Customer = {
   name: "Charles",
   account: bankAccount,
   hobbies: ["Sports", "Cooking"]
};

myself.account.deposit(3000);

console.log(myself);

const addNumbers = function (x: number, y: number): number {
   return x + y;
}
console.log(addNumbers(44, 11))

const multiplyNumbers = (x: number, y: number) => x * y;
console.log(multiplyNumbers(3, 22))
