const request = async () => {
    const response = await fetch('https://swapi.co/api/people/1/')
    const json = await response.json();
    console.log(json);
    console.log('this should print last')
    }
    
    request ();


    async function fetchUsers(https://swapi.co/api/people/1/) {
        const res = await fetch(https://swapi.co/api/people/1/);
        let data = await res.json();
        console.log(data);
      }


// await
// async functions pause at each await expression
// What if we wanted to make a request to an API? Normally, that would look something like this:
fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
// here we are making an asynchronous fetch to an API. As we've already learned, an asynchronous request always returns a promise. Here we're using .then (our promise resolver) to grab the response from the API, jsonify it, and are catching any errors. Note that we're chaining promise resolvers together. Each .then method returns a promise of it's own, which allows for method chaining.
// Fetch returns a Promise, which is a way to handle asynchronous operations without the need for a callback.
// What if we wanted to make a request to an API using await?
const response = await fetch('https://random.dog/woof.json');
const json = await response.json();
console.log(json);
// Breakdown of the above code:
//      1. In the first line, we make a GET request to our the random dog image API. Instead of continuing to the next line, we wait for the request to finish - hence await. When the request is finished, it passes the resolved value to the response variable.
//      2. In the second line, we jsonify the result we received from our response variable. We again use await to wait for it to complete (or fail), and then pass the result to the json variable.
//      3. In the final line, we're simply just running a console.log on our json variable.
// an await acts on an expression. When the expression is a promise, the evaluation of the async function halts until the promise is resolved. When the expression is a non-promise value, it is converted into a promise using Promise.resolve, and is then resolved. So in short, await allows us to wait for a promise to resolve to a value, and will return the value only after the promise is resolved.
// The above code is still missing one thing, though! What are we missing? An async function! Again, for us to be able to use await, we need to declare an async function or we'll receive an error. The above example wrapped in an async function should look something like this:
const request = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const json = await response.json();
    console.log(json);
}
request();
// --------------------------------------------------------------------------------------------------------------------------------------
// Why can't we run fetch from our local console?
// The Fetch method is actually part of the browser window. When you run JS through nodeExec or code runner, it just runs it through the nodeJS or the JS engine, which doesn't have fetch as an object. If you attach the file to an HTML document and run it in Chrome it should work.