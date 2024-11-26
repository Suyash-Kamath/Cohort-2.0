function findSum(n){
    let ans =0;
    for(let i =0;i<n;i++){
        ans+=i;
    }
    return ans;
}
function findSumTill100(){
    console.log(  findSum(100));
   }
// setTimeout(findSumTill100,1000); let us make this  synchronous
// busy waiting
function syncSleep(){
    let a=1;
    for(let i=0;i<10000000;i++){
        a++;
    }
}
syncSleep();
// this is what it makes it synchrounous , the heavy tasks
console.log("Hello World")