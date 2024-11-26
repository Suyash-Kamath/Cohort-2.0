// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }
// function quad(n){
//     return n*n*n*n;
// }
// //DRY = Don't repeat yourself

// // function  sumOfSquare(a,b){
// //     let square1= square(a);
// //     let square2=square(b);
// //     return square1+square2
// // }

// // function  sumOfCubes(a,b){
// //     let cube1= cube(a);
// //     let cube2=cube(b);
// //     return cube1+cube2
// // }

// function sumOfSomething(a,b,fn){
//     let number1=fn(a);
//     let number2=fn(b);
//     return number1+number2;
// }


// let ans = sumOfSomething(1,2,square);
// console.log(ans);





/*

function onDone(){
    console.log('Done with file reading');
    
}

setTimeout(onDone,0);
let a=0;
for(let i=0;i<10000000;i++){
    a=a+1
}
let b=0;
for(let i =0;i<10000000;i++){
    b=b+1;
}
console.log('doenee')
console.log('doneee');




*/
const fs=require('fs')
let a=1;
console.log(a)

fs.readFile("./a.txt","utf-8",(error,data)=>{
    data = data +"Suyash was here";
    console.log('done reading');
    
    fs.writeFile('./a.txt',data,'utf-8',()=>{
        console.log('done writing');
        
    })
    console.log('finally done')
    
})

let ans=0;
for(let i=0;i<10000;i++){
    ans=ans+1;
}

console.log(ans)


/*

const fs = require('fs');

function putCopyrightToFile(callback){
    fs.readFile('./a.txt','utf-8',(err,data)=>{
        data = data+" Copyright 2024 Suyash Kamath";
        fs.writeFile('./a.txt',data,'utf-8',()=>{
            callback()
        })
    })
}

putCopyrightToFile(()=>{
    console.log('Copyright has been put in the file');
    
})
console.log('Let us move forward')

*/
