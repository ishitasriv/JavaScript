/*let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.getTime())
console.log(myDate.getTimezoneOffset())
console.log(myDate.setTime())
console.log(typeof myDate)*/

//let mycdate =new Date(2023,0,23)
//console.log(mycdate)
//let mycdate = new Date(2023, 0 , 23,5,3)
let mycdate = new Date ("01-14-2023")
//console.log(mycdate.toLocaleString())
//console.log(typeof mycdate)
let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// str interpolation `${newDate.getDay()} and the time`

/*newDate.toLocaleString('default'){ 
    weekday : "long"
    timeZone :"long"
}
console.log(newDate)*/

// Scope