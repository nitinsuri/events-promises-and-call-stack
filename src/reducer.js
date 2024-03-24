const users = [
  { name: 'a', age: 50 },
  { name: 'a', age: 73 },
  { name: 'a', age: 23 },
  { name: 'a', age: 23 },
  { name: 'a', age: 23 },
  { name: 'a', age: 50 },
  { name: 'a', age: 54 },
];

const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);
export default output;
