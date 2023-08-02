const marvelheros=['thor','ironman','blackpanther']
const DCheros =['batman','flash','superman']
marvelheros.push(DCheros)

console.log(marvelheros)
console.log(marvelheros[3][0])
const allheros=marvelheros.concat(DCheros)
console.log(allheros)
const allnewheroes =[...marvelheros, ...DCheros]
const anotherarr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherarr)
//check
console.log(Array.isArray("Ishita"))
console.log(Array.from("Ishita"))
console.log(Array.from({name:"Ishita"}))
let sc1=100
let s2=200
let s3=300
console.log(Array.of(sc1,s2,s3))
