const numbers = [4,5,2,8,10];

const doubled = numbers.map(num => num * 2);

// console.log(doubled);

const fiveAdded = numbers.map(num => num + 5);
// console.log(fiveAdded);

const halves = numbers.map(num => num / 2);
// console.log(halves);

const friends = ['Tom', 'jhon', 'Micheal', 'Oliver'];

const lengths = friends.map(friend => friend.length);
// console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);