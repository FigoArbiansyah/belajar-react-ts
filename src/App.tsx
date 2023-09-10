/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import './App.css';

// String
let name: string = 'Figo';
name = 'Figo Arbiansyah';

// Number
let age: number | string = 17;
age = '18';

// Boolean
let isStudent: boolean = true;
isStudent = false;

// Array of String
const hobbies: string[] = ['Voli', 'Coding'];

// Spesifik
const role: [number, string] = [1, 'Go'];


type Person = {
  name: string;
  age?: number;
};
const person: Person = {
  name: 'Figo',
};
const lotsOfPerson: Person[] = [
  {name: 'user1'},
  {name: 'user2'},
];

function printName(name: string) {
  console.log(name);
}

printName('1');


const gatau: unknown = 'gatau';

interface Animal {
  name: string
  count: number
}

type X = {
  a: string;
  b: string;
}

type Y = X & {
  c: string;
  d: string;
}

interface Tree extends Animal {
  color: string
}

function App() {

  return (
    <main>
      Hello World
    </main>
  );
}

export default App;
