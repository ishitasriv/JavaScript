//for of
const arr=[1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}
const greetings ='Hello World!';
for (const greet of greetings) {
    console.log(`Each chat is ${greet}`);
}
const map = new Map()
map.set('IN','India');
map.set('USA', 'United States of America');
map.set('FR','France');
map.set('IN','India');
console.log(map); //maps have unique value, India won't be repeated again
for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key,':-',value);
}//use [] to de-structure the array

const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}
/*for (const [key, value] of myObject) {
    console.log(key,':-',value);
}*/