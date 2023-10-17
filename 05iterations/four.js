const myObject={
    js: 'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by appple'
}
for (const key in myObject) {
   console.log(`${key} is shortcut for ${myObject[key]}`);
}
const arr=[1,2,3,4,5];
for (const key in arr) {
   console.log(key);
}//key of array is predefined
//map is not iterable so using key won't work
const map = new Map()
map.set('IN','India');
map.set('USA', 'United States of America');
map.set('FR','France');
map.set('IN','India');
for (const key in map) { 
    console.log(key);
}

