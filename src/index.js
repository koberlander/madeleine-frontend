document.addEventListener('DOMContentLoaded', () => {
// load DOM elements
let articleSearch = document.getElementById('article-search')
let searchField = document.getElementById('search-field')
})

// add Event Listeners

var userSearchTerm = document.getElementById('button-addon2')
userSearchTerm.addEventListener('click', getArticles)

// // Execute a function when the user releases a key on the keyboard
// userSearchTerm.addEventListener('keyup', getArticles(e){

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


function getArticles(){
 let search_term = getSearchInput().value
  fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search_term + '&api-key='
        + config.secretApiKey)
  .then(res => res.json())
  .then(data => displaySearchResults(data)
    )
  }

  function displaySearchResults(data){
    data["response"]["docs"].forEach(article => {
      render(article)
        //all the stuff that follows
      // .forEach(cleanArticle => {

      // find div, add id

      // })
    })
  }

// only manage one at a time

function addToArray(cleanArticle, listOfArticles) {
  // declare w/ big scope, don't initialize to zero on invocation
  listOfArticles.push(cleanArticle)

  return listOfArticles
}

function render(article) {

  let pubDate = article["pub_date"]
  let webUrl = article["web_url"]
  let keywords = []
  let aKeyword = article["keywords"]

  // let cleanArticle = {"headLine": headLine, "author": author, "pubDate": pubDate, "snippet": snippet, "webUrl": webUrl}
  // article = Article.find_or_create_by(article_object)

  let searchCard = document.getElementById('styled-search-div')

  //find article results div
  let searchResults = document.getElementById('search-results')

  // create card divs <div class="card w-75"> and <div class="card-body">
  let cardDivParent = document.createElement('div')
    cardDivParent.className = 'card w-75'
    cardDivParent.setAttribute('id', 'card-w-75-id')

  let cardDivChild = document.createElement('div')
    cardDivChild.className = 'card-body'
    cardDivChild.setAttribute('id', 'card-body-id')

  // make headline <h5>, author <p>, and snippet <p> divs
  let headline = document.createElement('h5')
    headline.className = 'card-title'
    headline.setAttribute('id', 'card-title-id')
    headline.innerText = article["headline"]["main"]

  let author = document.createElement('p')
    author.className = 'card-text'
    author.setAttribute('id', 'card-text-id')
    author.innerText = article["byline"]["original"]

  let snippet = document.createElement('p')
    snippet.className = 'card-text'
    snippet.setAttribute('id', 'card-text-id-2')
    snippet.innerText = article["snippet"]

  //append article content tags to card div
  cardDivChild.append(headline, author, snippet)


  //append card div to parent
  cardDivParent.append(cardDivChild)

  //append parent to article results div
  searchResults.append(cardDivParent)


  // return cardDivParent
  return searchCard
}
