const user ={
    username: 'ishita',
    logincount:8,
    signedin: true,
    getuserdetails: function () {
        console.log('Got user details from database');
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getuserdetails());

function user(username, logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin
    this.greeting = function(){
        console.log(`Welcome${this.username}`);
    }

    return this
}

const userOne = new UserActivation('Ishita',12,true)
const userTwo = new User('ChaiaurCode',11,false)
console.log(userOne.constructor);
