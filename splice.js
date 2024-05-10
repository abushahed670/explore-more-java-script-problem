const friends = [12, 45, 32, 22, 48, 62, 29, 69, 87];
// const partial = friends.splice(2, 5);
const partial = friends.splice(2, 5, 44, 55, 66);
console.log(partial);
console.log(friends);