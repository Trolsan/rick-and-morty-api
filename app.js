const containerCard = document.getElementById('containerCard')
const search = document.getElementById('search')
window.addEventListener('DOMContentLoaded', callApi)

const GET_URL = 'https://rickandmortyapi.com/api/character'

search.addEventListener('keyup', filter)

function callApi(){

    fetch(GET_URL)
      .then(response => response.json())
      .then(data => {
        createCard(data)
    })

}


function createCard(data) {
    
    data.results.forEach(data => {

        const card = document.createElement ('div')
        card.classList.add('content')

        const name = document.createElement('h2')
        name.textContent = data.name

        const alive = document.createElement('h3')
        alive.textContent = data.status

        const specie = document.createElement('h3')
        specie.textContent = data.species

        const img = document.createElement('img')
        img.src = data.image
        img.classList.add('image')

        containerCard.appendChild(card)
        card.appendChild(name)
        card.appendChild(specie)
        card.appendChild(alive)
        card.appendChild(img)
        
    })

}

function filter(event) {

    containerCard.innerHTML = "";

    let url = GET_URL+ "?name=" + event.target.value

    fetch(url)
    .then(response => response.json())
    .then(data => {
      createCard(data)
  })

}