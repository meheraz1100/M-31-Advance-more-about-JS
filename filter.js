// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition

const numbers = [1, 5 , 6, 4, 15];
const player = [75, 65, 67, 72, 55, 59]
// const selected = player.filter(p => p > 70);
// const selected = player.filter(p => p > 80);
// const selected = player.filter(p => p > 50);
const selected = player.filter(p => p % 2 === 1);
console.log(selected);


const friends = ['Tom', 'jhon', 'Micheal', 'Oliver', joshna];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);