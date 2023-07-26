const name = "Ishita"
const repoCount = 50
//console.log(name + repoCount + " Value");
// old syntax not recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//good for back end, String Interpolation , code more readable 
const gameName = new String('Ishitas')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))
//mdn reference string methods
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-8,4)
console.log(anotherString)

//trim
