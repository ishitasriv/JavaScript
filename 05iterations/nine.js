//reduce
const array1 =[1,2,3]
const sumarr =array1.reduce( function (acc,currval){
    console.log(`acc =${acc} and currval ${currval}`)
    return acc+currval
},0)
//const sumarr = array1.reduce( (acc,currval)=> acc+ currval,0)
console.log(sumarr);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const shoptotal =  shoppingCart.reduce((acc,currval)=> acc+ currval.price,0)
console.log(shoptotal);