const form = document.querySelector('#form')
const eventCards = document.querySelector('.cards')

const eventTitle = document.querySelector('#eventTitle')
const eventDate = document.querySelector('#eventDate')
const category = document.querySelector('#category')
const description = document.querySelector('#description')

const clearBtn = document.querySelector('#clearBtn')
const sampleBtn = document.querySelector('#sampleBtn')

form.addEventListener('submit', function(event){

    event.preventDefault()

    const title = eventTitle.value
    const date = eventDate.value
    const cat = category.value
    const desc = description.value

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
        <h2>${title}</h2>
        <p>📆 ${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="deletecard">X</div>
    `

    card.querySelector('.deletecard').addEventListener('click', function(){
        card.remove()
    })

    eventCards.appendChild(card)

    form.reset()
})

clearBtn.addEventListener('click', function(){

    if(confirm("Clear all events?")){
        eventCards.innerHTML = ""
    }

})

sampleBtn.addEventListener('click', function(){

    const sampleEvents = [
        {
            title: "Tech Conference",
            date: "2026-03-10",
            cat: "Conference",
            desc: "Technology discussion event"
        },
        {
            title: "React Workshop",
            date: "2026-03-15",
            cat: "Workshop",
            desc: "Hands-on React training"
        },
        {
            title: "Developer Meetup",
            date: "2026-03-20",
            cat: "Meetup",
            desc: "Networking with developers"
        }
    ]

    sampleEvents.forEach(function(ev){

        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <h2>${ev.title}</h2>
            <p>📆 ${ev.date}</p>
            <button>${ev.cat}</button>
            <p>${ev.desc}</p>
            <div class="deletecard">X</div>
        `

        card.querySelector('.deletecard').addEventListener('click', function(){
            card.remove()
        })

        eventCards.appendChild(card)

    })

})
document.addEventListener('keydown', (event) => {

    const keyDisplay = document.querySelector('.dom')

    if(keyDisplay){
        keyDisplay.innerText = "Key Pressed: " + event.key
    }

})