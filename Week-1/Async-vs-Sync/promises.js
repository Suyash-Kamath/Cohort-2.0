const fs = require('fs');


function suyashReadsFile(){
    console.log('Inside suyashReadsFile');
    
    return new Promise((resolve)=>{
        console.log('Inside Promise');
        
        fs.readFile('./a.txt','utf-8',(error,data)=>{
            console.log('Inside Resolve')
            resolve(data)
        })
    })
}

function onDone(data){
    console.log(data)
}

// var a = suyashReadsFile();
// console.log(a);
// console.log('hi guys')
// a.then(onDone);
// console.log('All is done');


suyashReadsFile().then(onDone);
console.log('Hi Guys , Below call function');
