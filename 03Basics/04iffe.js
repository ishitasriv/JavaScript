//Immediate Invoked Function Expressions
(function chai(){
    console.log('DB CONNECTED');
})();
// global scope causes pollution sometimes so to avoid that we use iffe + it get's executed quickly
((name)=>{
    console.log(`DB CONNECTED 2 ${name}`);
})('hi');
// ADD ;
