// --- Հիմնական տիպեր ---
let username: string = "Hamlet";
let age: number = 25;
let isStudent: boolean = true;

let numbers: number[] = [1, 2, 3, 4];
let fruits: Array<string> = ["apple", "banana", "cherry"];

let userTuple: [string, number, boolean] = ["John", 30, true];

const Role= {
  ADMIN:"ADMIN",
  USER:"USER",
  GUEST:"GUEST",
}
type Role=(typeof Role)[keyof typeof Role];
let myRole: Role = Role.USER;

let something: any = "Hello";
something = 42;

let inputValue: unknown = "Test";
if (typeof inputValue === "string") {
  console.log(inputValue.toUpperCase());
}

function logMessage(message: string): void {
  console.log("Message:", message);
}

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// --- Interface և Type ---
interface User {
  id: number;
  name: string;
  email: string;
}

export const user1: User = {
  id: 1,
  name: "Anna",
  email: "anna@example.com",
};

type Product = {
  title: string;
  price: number;
  inStock: boolean;
};

const product1: Product = {
  title: "Laptop",
  price: 850,
  inStock: true,
};

// --- Generic Function ---
function identity<T>(value: T): T {
  return value;
}

const strResult = identity<string>("Hello");
const numResult = identity<number>(123);
const arrResult = identity<number[]>([1, 2, 3]);

console.log(strResult, numResult, arrResult, );