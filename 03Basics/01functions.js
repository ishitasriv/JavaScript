function sayMyName(){
    console.log("I")
    console.log("AM")
    console.log("Ishita")
}
sayMyName()//reference ()is the execution
function addtwonums(a,b){ //a and b are parameters
    //console.log(a+b);
    return(a+b);
}
addtwonums(9,2)//9 and 2 are arguments
const result= addtwonums(6,1)
console.log("result:", result);
// console.log doesn't means function has returned anything
// if there is just console.log in the func. result value would be undefined
// if a line is above return it would get executed, nothing gets executed in a function after return
function loginUserMessage(username){
    return`${username} just logged in`
}
 console.log(loginUserMessage("Ishita"))

 function calcartprice(...num1){
    return num1
 }
 console.log(calcartprice(200,400,5000,500))
//try this
function calcartprice(val1,val2...num1){
    return num1
 }
 const user ={
    username : "Ishita"
    price : 199
 }
 console.log(calcartprice(200,400,5000,500))
 function handleObject(anyobject){
    console.log(`Username is ${} and proce is ${}`);
 }
 const myNewArray =[200, 400, 100, 600]
 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(myNewArray))