fetch('http://localhost:4000/films/')
.then((res) => res.json())
.then((data) => displayNames(data))

function displayNames(names){
    names.forEach(films => {
      let menu = document.querySelector('#list')
      let display =document.createElement('li')
      display.innerHTML = `${films.title}`
      menu.appendChild(display)
})
}

fetch('http://localhost:4000/films')
.then((res) => res.json())
.then((data) => displayContent(data))


function displayContent(content){
    content.forEach(films => {
        let main = document.querySelector('main')
        let list = document.createElement('li')
        list.innerHTML = `
        <img src='${films.poster}'>
        <p id='items'>Available tickets${films.capacity}<br>
        screentime :${films.showtime}<br>
        Duration: ${films.runtime}<br>
        <button id='button'>Buy Ticket</button>
        <button id='delete'>DELETE</button>
        `
        main.appendChild(list)
        let btn = list.querySelector('#button')
        btn.addEventListener('click' , buyTicket)
        let deleteMovie = list.querySelector('#delete')
        deleteMovie.addEventListener('click' , deleteIt)
          

    function buyTicket(){
        if(films.capacity > 0){
        let remainingTickets = films.capacity  - 1
        let soldTickets = films.tickets_sold + 1
        let final = {
            capacity : remainingTickets,
            tickets_sold : soldTickets
        }
        
        fetch(`http://localhost:4000/films/${films.id}` , {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(final)
        })
    }else{
        let soldOut = {
            capacity : 'SOLD OUT !'
        }

        fetch(`http://localhost:4000/films/${films.id}` , {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(soldOut)
        })
    }
}
    function deleteIt(){
        fetch(`http://localhost:4000/films/${films.id}` , {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            },
        })
    }
})
}



