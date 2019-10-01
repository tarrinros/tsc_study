const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 42;
let float: number = 4.2;
let num: number = 3e10;

const str: string = 'Hello Typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const stringArray: string[] = ['one', 'two', 'three'];

// Tuple type of array - array with various types of values
const contact: [string, number] = ['Alexa', 2354677744];

//Any
let variable: any = 42;
variable = 'Hello!';
variable = [];

// =====

function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Heisenberg');


// Never used for errors throwing and infinite cycles
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
  while(true) {}
}

// custom types names
type Login = string

const login: Login = 'admin';
// const login2: Login = 23;

// multytype
type ID = string | number

const id1: ID = 23;
const id2: ID = 'one';
// const id3: ID = true;

// Null | undefined

type SomeType = string | null | undefined