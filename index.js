let player = {
    name: "Kathy",
    chips: 145,
    sayHello: function() {
        console.log("Hey")
    }
}

player.sayHello()

let cards = []
let sum = 0
let draw = 0 
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



let PlayerEl = document.getElementById("player-el")
PlayerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    draw = Math.floor(Math.random()*13) + 1
    if (draw === 1) {
        return 11
    } else if (draw >= 10) {
        return 10 
    } else {
        return draw
    }
}

function startGame() { 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.innerText = "Cards: " + cards
    sumEl.innerText = "Sum: " + sum
    if (sum <= 20) {
        messageEl.innerText = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.innerText = "Woohoo!  You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.innerText = "You're out of the game!"
        isAlive = false
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        getRandomCard()
        cardsEl.innerText = "Cards: " + cards
        cards.push(draw)
        sum += draw
        renderGame()
    }   

}

