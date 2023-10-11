/*let a =10
if (true){
    let a=10

}
*/
//Nested Scope 
//Child func can access parent func
function one(){
    const username='hitesh'
    function two(){
        const website ='youtube'
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()
if(true)
{const username='ishita'
if (username==='ishita'){
    const website ='youtube'
    console.log(username+website)
}
    //console.log(website)
}
//console.log(username)
//
console.log(addone(5))
function addone(num){
    return num +1
}

const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))