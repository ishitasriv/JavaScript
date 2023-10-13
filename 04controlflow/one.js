//if
/*if(condition){

}
if(2==2){

}
const isuserloggedin= true
if (isuserloggedin){

}*/
//2==2
//<,>,<=,>=,==,!=, ===(checks type too)
/*if(2=='2'){
console.log('==')
}
if(2==='2'){
console.log("===")
}
const isuserloggedin = true 
const temp= 41
if (temp === 41){
    console.log('less than 50');
}
else {console.log('temperature is greater than 50');}*/
/*const score =200
if (score>100){
    const power ='fly'
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);*/
/*const balance =1000
if(balance>500) console.log('test'),
console.log('test2'); //implicit scope , unreadable not a good practice*/
/*const balance =1000;
if ( balance<500){
    console.log('less than 500');
}
else if (balance<750){
    console.log ('less than 750');
}
else if (balance<900){
    console.log('less tham 900');
}
else{
    console.log('less than 1200');
}*/
const userloggedin =true
const debitcard = true
const loggedinfromGoogle =false
const loggedinfromemail = true
if (userloggedin && debitcard){
    console.log('u can buy')
}
if (loggedinfromGoogle || loggedinfromemail || 2==2){
    console.log('user logged in');
}