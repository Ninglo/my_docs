import { readCSV } from "./readCSV.ts";

const a = '/Users/jiujianian/Downloads/15038204_202408101035527131.csv'
const b = '/Users/jiujianian/Downloads/15045114_202408101036277817.csv'

const recordsA = await readCSV(a);
const recordsB = await readCSV(b);

const aList = recordsA.map(r => r['1.B 站账号（ID）'])
const bList = recordsB.map(r => r['1.B 站账号（ID）'])

console.log(JSON.stringify(aList))
console.log(JSON.stringify(bList))