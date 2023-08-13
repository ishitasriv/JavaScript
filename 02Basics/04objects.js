const user = new Object() //sigleton object
//const user ={} 
console.log(user)
user.id="123abc"
user.name ="Sammy"
user.isLoggedin = false
//console.log(user)
const regUser={
    email: "this@gmail.com",
    fullname:{
        fname:"Ishita",
        lname:"Srivastava"    }
}
//console.log(regUser.fullname?.fname)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
const obj4=Object.assign({},obj1,obj2,obj3)// if we don't assign the empty array the values woulb be stored in obj1
 //console.log(obj4)
const obj5={...obj1,...obj2}//spread
//console.log(obj5)
///next method would be used when we will get value from database

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
