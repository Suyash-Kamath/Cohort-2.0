// When you create your own async function, you are essentially wrapping other asynchronous functions. 
// Under the hood, async functions behave like standard functions, 
// but they allow you to handle asynchronous operations using Promises and the await keyword





/*
//returns nothing

function myOwnSetTimeout(callback,duration){
    setTimeout(callback,duration);
}


myOwnSetTimeout(()=>{
    console.log('After setTimeout');
    
},1000)

*/


// returns a promise

function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise((resolve,reject)=>{
        setTimeout(resolve,duration)
    })

    return p;
}

const ans = promisifiedMyOwnSetTimeout(1000);
console.log(ans);

ans.then(()=>{
    console.log('Timeout is done');
    
})

// in callback , you say once you done please do this , but in promise it says , I have done but what you want me to do 

/*

Your analogy is on the right track, but it can be refined a bit for clarity. Here's a more accurate way to express the difference between callbacks and Promises:

Callback: "Once you're done, please call me back and do this."

In a callback, you pass a function that will be executed once the asynchronous operation is finished. The function is invoked after the task completes.
Promise: "I’ve completed the task. What do you want me to do next?"

A Promise represents the result of an asynchronous operation. It can either be resolved (success) or rejected (failure). With Promises, you don't need to explicitly tell the code to "call me back". Instead, you use .then() to handle what happens after the task is completed, or .catch() for errors.
Here's a comparison with examples:
Using a Callback:

javascript
Copy code
function fetchData(url, callback) {
    setTimeout(() => {
        const data = "Some fetched data";
        callback(data);
    }, 1000);
}

fetchData("https://example.com", function(data) {
    console.log(data);  // "Some fetched data"
});
Callback: You pass a function to fetchData, which gets called once the asynchronous task (the setTimeout) is completed.
Using a Promise:

javascript
Copy code
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some fetched data";
            resolve(data);
        }, 1000);
    });
}

fetchData("https://example.com")
    .then(data => {
        console.log(data);  // "Some fetched data"
    })
    .catch(error => {
        console.error(error);
    });
Promise: You create a Promise that will either resolve or reject. The then() method is used to handle the result once the Promise is resolved.
Why the Analogy Works:
Callback: You are saying, "Once you're done, let me know and I'll take action." You’re explicitly passing a function to be called after the task finishes.

Promise: You're saying, "I’ve finished the task, so now I’m ready to proceed based on what you want to do next (with .then())." The promise itself represents the eventual result of the asynchronous operation, and you handle the next steps by chaining methods like .then().

This analogy more clearly captures the difference between how callbacks and Promises work, especially when it comes to how the results are handled once the asynchronous operation is complete.

*/






/*

async and await work with any asynchronous operation that returns a Promise. However, they are not limited to only handling promises that explicitly return a value. Here’s a breakdown of how async and await work in different situations:

1. async and await with Promises that Return Values
When you use async and await, the function is expected to work with a Promise. That Promise can resolve to any value (a primitive, an object, etc.).

Example: Returning a Value from a Promise
javascript
Copy code
async function fetchData() {
    const response = await new Promise((resolve) => {
        setTimeout(() => resolve("Hello, world!"), 1000);
    });
    console.log(response);  // Logs: "Hello, world!"
}

fetchData();
Here, the Promise resolves with the string "Hello, world!".
await pauses the execution of the function until the Promise resolves.
Once the Promise resolves, the result ("Hello, world!") is assigned to the response variable, which is then logged.
2. async and await with Promises that Don't Return Values
async functions always return a Promise. If you don't explicitly return anything inside the async function, the function implicitly returns undefined, wrapped in a Promise.

Example: Returning undefined from a Promise
javascript
Copy code
async function doNothing() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    // No return value, so this function implicitly returns Promise.resolve(undefined)
}

doNothing().then(() => {
    console.log("done");  // Logs: "done"
});
The Promise inside doNothing() resolves after 1 second.
The async function completes, but since there’s no return value, it resolves with undefined.
.then() can still be used to handle the resolved state, but the resolved value will be undefined.
3. Handling Promises without Explicit return in async Function
Even if you don’t return anything inside an async function, it still returns a Promise. This is useful in cases where you want to signal completion without necessarily returning a value.

Example: Implicit Return of undefined
javascript
Copy code
async function myAsyncFunction() {
    const data = await someAsyncTask();
    console.log('Task completed');
}

myAsyncFunction().then(() => {
    console.log('Function finished');  // This will print when the promise resolves
});
myAsyncFunction runs asynchronously, waits for someAsyncTask(), and completes without returning a value.
Even though there’s no return statement, the function still returns a Promise, and you can handle its completion with .then() or await.
4. await Can Be Used With Non-Promises
While await is primarily designed to wait for Promises, if you use it with a non-Promise value (e.g., a number, string, or object), it treats that value as already resolved and doesn't block the execution.

Example: await with a Non-Promise Value
javascript
Copy code
async function example() {
    const result = await 42;  // 42 is not a Promise
    console.log(result);  // Logs: 42
}

example();
In this case, since 42 is not a Promise, await simply returns the value immediately without any delay.
5. async and await with Promise Rejection
If the Promise is rejected, the await expression will throw an error, which you can catch using a try...catch block inside the async function.

Example: Handling Promise Rejection
javascript
Copy code
async function fetchData() {
    try {
        const data = await new Promise((_, reject) => {
            setTimeout(() => reject("Failed to fetch"), 1000);
        });
        console.log(data);
    } catch (error) {
        console.log(error);  // Logs: "Failed to fetch"
    }
}

fetchData();
In this example, the Promise is rejected, and the catch block inside the async function handles the error.
Key Points:
async functions always return a Promise, even if you don’t explicitly return a value.
await can be used with any expression that returns a Promise, including promises that don't resolve to a value. If the expression is not a Promise, await will just return the value immediately without waiting.
Promises can resolve with any value, including undefined. If no value is returned in the async function, it resolves to undefined.
async functions and await work seamlessly with asynchronous operations such as fetch, setTimeout, readFile, and any other function that returns a Promise.
So, async and await do not require a return value from a Promise. They simply deal with the asynchronous resolution of a Promise (whether or not that resolution has a value).





*/