const fs = require("fs"); // file system

fs.readFile('./a.txt','utf-8',(error,data)=>{
    console.log(data);
    
})
console.log('Hi There');

let a =0;
// takes longer than the file read
for(let i =0;i<100000000;i++){
    a++;
}
let b=0;
for(let i =0;i<100000000;i++){
b++
}
console.log('Hi There 2');


// https://chatgpt.com/c/67277be3-0dfc-8006-9e9c-2c753548790e

/*

In JavaScript’s event-driven model, when the main thread (also called the call stack) 
becomes idle (meaning there are no more synchronous tasks to execute), it checks the event 
loop for any pending asynchronous tasks that are ready to run. If any of those tasks have 
completed (like the file read in your example), their callback functions are pushed to the
 call stack to be executed

*/