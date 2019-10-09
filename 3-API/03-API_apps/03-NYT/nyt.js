// GROUP 1
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'PmTvgJZGPyJfF4WdSLBUHm4YwTvOlAIR';

let url;
const searchTerm = document.querySelector('.search'); // references all the DOM elements that we'll be manipulating
const startDate = document.querySelector('.start-date'); //appends to HTML elements with the .
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

// results navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//results section
const section = document.querySelector('section');

// sets the initial style to none 
nav.style.display = 'none'; //

//pagination and display - starts at page 0?
let pageNumber = 0;

// console.log('PageNumber:', pageNumber);
searchForm.addEventListener('submit', fetchResults); //adds event listen for submit (Search bar)
nextBtn.addEventListener('click', nextPage); //adds event listener for clicking next page 
previousBtn.addEventListener('click', previousPage); //adds event listen for clicking previous page


function fetchResults(e) { // Function declared for fetch results // E is event handling function 
  // the e is similiar to a variable that holds properties/variables/functions
  // console.log(e); // logging event object (learning purposes)
  e.preventDefault(); // In other words, even though we tell our code to submit the data, 
  // we don't actually want data to be submitted anywhere. We want to get data
  // This isn't a form where we are signing up for something or filling out data to be saved in a database.
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //versatile query string.

  console.log('URL:', url); // string logged so that we can see it 
  
  
  if (startDate.value !== '') {
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
  }
  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }
  // GROUP 2

  fetch(url) // We make the fetch request and pass through the NYT Url
    .then(function (result) { // We then create a promise and return the result // defining / using function result
      console.log(result)
      return result.json();// The promise asynchronously returns a function that converts the result into usable json format - result.json() is that function call.
    })
    .then(function (json) { // second function takes in the json object that we created 
      console.log(json);  // logged Json object
      displayResults(json); //display the JSON object
    })
}

function displayResults(json) { // function for displayed json results
  // console.log('Display Results', json);
  // console.log(json.response.docs);
  ////We run the displayResults function each time the button gets pressed. 

  while (section.firstChild) {  //while loop runs until condition validates as false -- 
    section.removeChild(section.firstChild); 
  }
  //In this chunk of code, we are checking to see if the section element has any child elements. 
  //If the section.firstChild is true, then we call removeChild on the section variable, 
  //which targets the section element in the html file. 
  //This simply will clear out any child elements that are in the section.

  let articles = json.response.docs; // storing the json data in a variable - articles
  // console.log(articles); // digging into the json object with dot notation

  if (articles.length === 0) { // if else to show results - Will console log 'No results' if there are no articles
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) { // For loop that will iterate for the length of the articles array.
      // console.log(i); How many articles? 
      //these are appending to the DOM? // DOM manipulation // These are all declared within the for loop - local scope
      let article = document.createElement('article'); //declaring article 
      let heading = document.createElement('h2'); //declaring heading
      let link = document.createElement('a'); //declaring link
      let img = document.createElement('img'); //declaring img
      let para = document.createElement('p'); //declaring para
      // We've declared a paragraph variable that will append a p tag to the DOM to be used for some of our JSON data.
      let clearfix = document.createElement('div'); //declaring clearfix 
      //We're declaring a clearfix variable that will later on append a div to the DOM. 

      let current = articles[i]; //current is displayed/pulled for articles[i] [i] was previous declared up higher. 
      console.log('Current:', current); // puts the string of 'Current:' above the current variable info- 

      link.href = current.web_url; // attaches link/url to current article 'a' tag
      link.textContent = current.headline.main; //attaches headline.main to current - adds to textContent? 

      para.textContent = 'Keywords: ';
      //Para added as child of article -- .textcontent is now added to para - Adds 'Keywords' to webpage

      // GROUP 3

      for (let j = 0; j < current.keywords.length; j++) { // this is concerning the span 
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) { // if we have multimedia pull it and utilize it 
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; // pulls and sets image 
        img.alt = current.headline.main; // alternate if img fails to load - Set as current headline
      }

      clearfix.setAttribute('class', 'clearfix'); // assigning the class of clearfix 

      article.appendChild(heading); // appending pulled multimedia info? 
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }

  if (articles.length === 10) { // NYT returns 10 results/articles 
    nav.style.display = 'block'; // sets display style to block as we pull 10 articles- 
  } else {
    nav.style.display = 'none'; // no display for no articles/results
  }
}

function nextPage(e) { // function for next page defined -- will get an error without this
  // console.log('Next button clicked'); e=event
  pageNumber++;  // adding to page number 
  fetchResults(e);
  console.log('Page Number:', pageNumber); //puts the string of page number 
}

function previousPage(e) { // function for previous page defined -- will get an error without this
  // console.log('Previous button clicked');
  if (pageNumber > 0) {
    pageNumber--; // subtracting from page number 
    fetchResults(e);
  } else { // else statement for if you can't subtract more 
    return;
  }
  fetchResults(e);
  console.log('Page:', pageNumber); 
}