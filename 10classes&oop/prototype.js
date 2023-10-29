/*let myName ='ishita.....'
let mychannel ='chai....'
console.log(myName.truelength);*/

let myheroes =['thor', 'spiderman']
let heroPower ={
    thor:'hammer',
    spiderman: 'sling',
    getspiderpower: function(){
       // console.log(`spidey power is${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    //console.log(`Histesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){
    //console.log(`Hitesh says hello`);
}
//heroPower.hitesh()
myheroes.hitesh()
myheroes.heyHitesh()
//heroPower.heyHitesh()


//inheritance
const User={
    name:'chai',
    email: 'this@google.com'

}
const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength =function(){
    //console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength()
'hitesh'.trueLength()
'icetea'.trueLength()
    