//objects can be declared as literals and constructor
//sigleton ~constructor
//object literals
const mySym = Symbol("key1")
const JsUser={
    name:'Ishita',
    "fullname":"Ishita Srivastava",
    [mySym]:"mykey1",
    age:18,
    location: "Delhi",
    email:"ishita@gmail.com",
    isloggedin:'False',
    lastlogindays:["Monday","Saturday"]
}
/*console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(JsUser[mySym])

JsUser.email="ishita@google.com"
//Object.freeze(JsUser)
JsUser.email='ishita@that.com'
console.log(JsUser.email)*/
//functions
JsUser.greeting=function(){
    console.log("heelooo,");
}
JsUser.greetingtwo=function(){
    console.log(`heelooo,${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())