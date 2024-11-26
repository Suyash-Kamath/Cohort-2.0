setTimeout(()=>{
    console.log('Hi There');

    setTimeout(()=>{
        console.log('Hi inside the second one');

        setTimeout(()=>{
            console.log('Hi inside the third one');
            
        },3000)
        
    },2000)
    
},1000)