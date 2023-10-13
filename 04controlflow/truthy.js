const userEmail =[];
if (userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
//falsy values
//false, 0,-0, BigInt 0n,"", null, undefinedn, NaN
//anything else from above mentioned falsy is truthy
// truthy values
//"0", "false", " ",[],{}, function(){}
const ar=[]
if (ar.length ===0){
    console.log("Arrray is empty");
}
const emptyobj={}
if (Object.keys(emptyobj).length===0){
    console.log("Object is empty");
}
//Nullish Coalescing Operator(??): null undefined
let val1;
//val1 = 5?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // NC will choose 1st value in this case i.e, 10
console.log(val1);

// Terniary Operator
// condition ? true: false
const iceteaprice =100;
iceteaprice <=80 ? console.log("less than 80"): console.log("more than 80");;