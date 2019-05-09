document.addEventListener('DOMContentLoaded', () => {
// load DOM elements
let articleSearch = document.getElementById('article-search')
let searchField = document.getElementById('search-field')
})

// add Event Listeners

var userSearchTerm = document.getElementById('search-field')
userSearchTerm.addEventListener('click', getArticles)

// // Execute a function when the user releases a key on the keyboard
// userSearchTerm.addEventListener('keyup', getArticles(e){
//   debugger
//   // Number 13 is the "Enter" key on the keyboard
//   if (e.keyCode === 13) {
//     // Cancel the default action, if needed
//     e.preventDefault()
//     // Trigger the button element with a click
//     document.getElementById('button-addon2').click();
//   }
// })

function getSearchInput(){
  let userSearchTerm = document.getElementById('search-field')
  return userSearchTerm
}

// helper functions

function displaySearchResults(data){
//       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//   </div>
// </div>

//find article results div
let searchResults = document.getElementById('search-results')

// create card divs <div class="card w-75"> and <div class="card-body">
let cardDivParent = document.createElement(div)
 cardDivParent.classname('card w-75')
 cardDivParent.setAttribute('id', 'card-w-75-id')

let cardDivChild = document.createElement(div)
 cardDivChild.classname('card-body')
 cardDivChild.setAttribute('id', 'card-body-id')

//make headline <h5>, author <p>, and snippet <p> divs
let headline = document.createElement(h5)
  headline.classname('card-title')
  headline.setAttribute('id', 'card-title-id')
  // headline.innerText = ??????

//append article content tags to card div



//append card div to parent



//append parent to article results div

 // return cardDivParent

}

function getArticles(){
  debugger
 let search_term = getSearchInput().value
  fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search_term + '&api-key='
        + config.secretApiKey)
  .then(res => res.json())
  .then(data => displaySearchResults(data)
    )
  }
