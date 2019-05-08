document.addEventListener('DOMContentLoaded', () => {
// load DOM elements
let articleSearch = document.getElementById('article-search')

})

// add Event Listeners


fetch('http://localhost:3000/api/v1/search', {
method: "POST",
headers: {
            "Content-Type": "application/json",
			"accept": "application/json"
      },
body: JSON.stringify({"search_term": "penguin"})
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.warn(error))

// load/generate params to send to search
// (look into POST requests /fetch (mimicing sending a form))

//


// helper functions
function getArticles(){
  fetch('http://localhost:3000/api/v1/articles')
  .then(res => res.json())
  .then(json => console.log(json))
}
