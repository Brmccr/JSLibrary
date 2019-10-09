/*

    -Introduced in ES8, async functions can be thought of as an alternate way of writing promise based code
    Will allow us to avoid chaining promises

    -async/await allows us to program using an asynchronous request, like a fetch, in a synchronous manner. 

*/

// syntax : - async functions unlock the use of the awai keyword inside of an 
// async function. Using await in any other case results in a syntax error. 

async function myFn(){
    // since this is an async function it unlocks the use of the 'await' keyword
}

const myFun = async () => {
    // unlocks use of await keyword - Declared as async
}

const myFn = () => {
    await // wouldn't work in this case since this isn't an async function -- Will give error as it doesn't apply .
}

// async functions are normal javascript functions but they always reutnr a promoised by default 

async function fn() {
    return 'hello'
}

fn().then(console.log)

function fn () {
    return Promise.resolve('hello');
}

fn().then(console.log);


// catching errors 

async function foo(){
    throw Error('this is a mistake');
}

// foo().then(console.log);
foo().catch(console.log);

// await keyword

// async functions pause at each await expression

fetch('https://random.dog/woof.json')
.then(response => response.json)
.then(json => console.log(json))
.catch(error => console.log(error))


const request = async () => {
const response = await fetch('https://random.dog/woof.json')
const json = await response.json();
}

request ();


// this example works, but doesn't return it as a promise resolver
const request = async () => {
    const response = await fetch('https://swapi.co/api/people/1/')
    const json = await response.json();
    return await Promise
    console.log('this should print last')
    }
    
    request ();

    return Promise.

    return await Promise



