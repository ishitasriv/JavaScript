const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //db calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log('promise consumed');
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})

promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Chai',email:'this@example.com'})

    },1000)
})

promisethree.then(function(user){
    console.log('user')
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: 'Ishita', password:'123'})
        }
        else
        {
            reject('Error')
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)

}).catch((error)=> {
    console.log(error);
}).finally(()=>{
    console.log('the promise is either resolved or rejected')
})

const promisefive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: 'javascript', password:'123'})
        }
        else
        {
            reject('Error: JS went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    try{const response = await promisefive
    console.log(response);}
    catch(error){
        console.log(error);
     }
}
consumePromiseFive()

async function getallusers(){
    const response =await fetch()
}