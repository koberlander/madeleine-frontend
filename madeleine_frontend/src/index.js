document.addEventListener('DOMContentLoaded', () => {
// load DOM elements
let articleSearch = document.getElementById('article-search')

})

// add Event Listeners


// helper functions
function getArtcles(){
  fetch('http://localhost:3000/api/v1/articles')
  .then(res => res.json())
  .then(json => console.log(json))
}
