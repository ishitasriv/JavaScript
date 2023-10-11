const user= {
    username: 'ishita',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome here`);
        console.log(this);
    }

}
/*user.welcomeMessage()
user.username='dash'
user.welcomeMessage()
console.log(this);*/
//function coffee(){
    //console.log(this);}
//coffee()
//this can't be used inside of function

/*const chai=function(){
    let username ='ishita'
    console.log(this.username);
}
chai()
const chaii =()=>{
    let username='ishita'
    console.log(this.username);
}
chaii()*/
//same output- undefined
//PURE ARROW FUNC
/*const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(2,5))*/
//implicit return
const addtwo=(a,b)=>(a+b);
//if using return add {} 
const addTwo=(a,b)=>{return(a+b)}
//if returning objects you have to use ()
const addt=(a,b)=>({username:'ishita'})