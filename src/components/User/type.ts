
// export type UserProps={
//     title:string;
//     username:string;
//     age:number;
//     status:boolean;
//     handleClick?:()=>void;
// }

// Հիմնական տիպեր
let userName: string = "Hamk";
let userAge: number = 21;
let isActive: boolean = true;

// Զանգված (array)
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Ani", "Karen", "David"];

// Տյուպլ (tuple)
let person: [string, number] = ["Alex", 25];

// Enum
enum Role {
  Admin,
  User,
  Guest
}
let userRole: Role = Role.Admin;

// any
let anything: any = "Hello";
anything = 123;
anything = true;

// unknown
let value: unknown = "Text";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// void
function logMessage(): void {
  console.log("This is a message");
}

// never
function throwError(message: string): never {
  throw new Error(message);
}