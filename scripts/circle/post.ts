const str = ``

const base = 0
const list = str.split('\n').filter(Boolean).map(line => line.split(',') as [string, string]).slice(base, base + 10);
const c = list.map(([name, email], i) => ({ id: String(600 + base + i), name, email }))
// console.log(JSON.stringify(c, null, 4));

console.log('done');
