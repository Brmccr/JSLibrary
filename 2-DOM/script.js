/* 

-DOM stands for Document object Model. 

Allows Javascript to interact with HTML and CSS of webpage. 


- every element in a document- whether it be the HTML document as a whole, the head, the tables,
within the document, the tables headers, tecxt within the tables cells, are all part of the DOM for the HTML document.
They can all be accessed and manipulated using the DOM and a scripting language like Javascript. 

*/

//1

let x = 10;

console.log(x)

//2 getElementById


//  .style Changes the p tag color to red -- 
// document.getElementById('testParagraph').style.color = 'red';

//Storing in variables can be useful -- 

let testParagraph = document.getElementById('testParagraph');

// Can grab by variable name after it is stored-- Example above line
testParagraph.style.color = 'blue';

console.log(testParagraph);


/* 
    getElement will grab the first HTML element with the specificed value - 

    If we have multiple elements with the same ID - Will still grab the first one.
*/

// 3. querySelectorAll & innerText, innerHTML, and textContent

console.log(document.querySelectorAll('p.sampleClass'));

// querySelector is looking for a p tag with the class of sampleclass
// returns a node list that matches the specified group of selectors (Nodelist objects)
// Node List objects are colletions of nodes and nodes are simply just various items in the HTML document itself. 
// Node List items are put into an array - 

document.querySelectorAll('p.sampleClass')[2].innerText = 'My text has changed!'; //Need to use bracket notation to 
// select index from the NodeList array even if there's only one element.  

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    // pTag.innerText = 'My text has changed using a forEach method!';
    // ptag.textContent = 'My text has changed using a forEach method!';
    pTag.innerHTML = '<h3>My text has changed using a forEach method!<h3>';
});

//Grabs all of the paragraphs -- change.All
//innerText references text of that element- Does the same thing as grabbing textContent in this example. 
// textContent will return all text, even if it is hidden text. 
// innerHTML allows us to set text as well as HTML elements, which will be nester inside of the current HTML element referenced
// <i> makes italicized 
// can change <i> to <h3> to change from <i> to using a <h3> for all lines that are grabbed - Can modify there. 

// console.log(document.getElementById('spanTest'.innerText));
// console.log(document.getElementById('spanTest').textContent);

// 4. eventListener - click

// document.getElementById('clickThisButton').addEventListener('click', event => {
//     // event.target.style.backgroundColor = 'blue';
//     event.target.style.display = "none";
//     console.log(event);
//     console.log(event.target);
// })

document.getElementById('clickThisButton').addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue';
    } else {
        event.target.style.backgroundColor = 'red';
    }
})


document.getElementById('nameInput').addEventListener('keyup', event => {
    console.log(event);
})

// stores all elements with the give tag name - Can then use bracket notation to grab which one
console.log(document.getElementsByTagName('p'))

document.getElementById('nameInput').addEventListener('keyup', function(event){
    console.log(event.target.value)

document.getElementsByTagName('p')[0].innerText = 'Something Changed!';

if(event.target.value == ''){
    document.getElementsByTagName('p')[1].innerText = 'nothing has been typed';
} else {
    document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${event.target.value}`
}
})

