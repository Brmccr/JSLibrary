/*

   - API stands for application program interface


    -in basic terms, API's allow applications to communicate with one another. 
    - the API is not the database or server, it is the code that allows us access points to the server 
        --- those access points come in the form of an endpoint -- endpoints direct us to diffrent sets of data we can access
    

    Asynchronous Programming

        -Asynchronous Prgramming allows our code to continue to run while we're waiting on a response from an API or 
        outside source. Once we've compelted fetching or retrieving our data, it then presents us with that data, without having to
        wait on any other processes or code.
        
        

*/

const baseURL = 'https://api.spacexdata.com/v2/rockets'; //this is the base url that's reaching out to the space x rockets
// endpoint

const searchForm = document.querySelector('form'); //referencing from html document 
const spaceShips = document.querySelector('ul'); // referencing UL from html document

searchForm.addEventListener('submit', fetchSpace); //grabbing searchform variable, adding event listener, event is a submit
// event, and the submit event calls fetchSpace function


function fetchSpace(event) { //declaring the function 

    // console.log(event)
    event.preventDefault(); // prevents the page from refreshing from submit

    fetch(baseURL) // fetch starts the process of fetching a resource from a network, and that fetch returns
    // a promise. That promise is fulfilled or resolved once the response from the fetch is available. 
    .then(data => {
        // console.log(data)
        return data.json();
    })
    .then(json => {
        // console.log('promise results'json);

        // a callback function is a function that is to be executed after another function has finished executing.
        // in this case, our callback function is 'displayRockets', and it is waiting on our 'fetchSpace' function and all
        // of it's promises to resolve being called and passed data. 
        displayRockets(json); 
    })
}

function displayRockets(json) {
    console.log('display results:', json)

    let rockets = json.forEach(rocket =>{
        let r = document.createElement('li');
        r.innerText = rocket.name;
        spaceShips.appendChild(r);
    })
}

// alt z for wordwrap
