//for
/*for (let i  = 0; i  < 10 ; i++) {
    console.log(i);
    if (i==5){
        console.log("5 is best");
    }
}*/
for(let i =0;i<=10;i++){
    //console.log(i);
    for (let j = 0; j <=10; j++) {
        //console.log(i+'*'+j +'='+ i*j);
        
    }
}
let myArray=['flash','batman','superman']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}
// break and continue
for (let index = 1; index <=20; index++) {
    if (index==5){
        console.log(`${index} Detected`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}

