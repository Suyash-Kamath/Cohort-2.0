function suyashAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(()=>{
            resolve('Hi There !!')
        },5000)
    })
    return p;
}

async function main(){
    
   let value =  await suyashAsyncFunction()
   console.log(value)
   console.log('Hi Guys my name is Suyash')
    
}

main()

console.log('After Main')