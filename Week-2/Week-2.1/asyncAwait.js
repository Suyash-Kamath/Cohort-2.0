function myOwnSetTimeout(fn,duration){
    setTimeout(fn,duration)
}

myOwnSetTimeout(()=>{
    console.log('done');
    
},10000)

console.log('otuside');

