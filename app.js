const grille = document.querySelectorAll('.case')
const scorePlayer1 = document.querySelector('.score_player1')
const scorePlayer2 = document.querySelector('.score_player2')
const BODY = document.querySelector('body')
const circle = 'motif1'
const croix = 'motif2'
const button = document.querySelector('.button button')
const modal = document.querySelector('.modal')
const startButton = document.querySelector('.modal .start')
const gamer1Name = document.querySelector('input#gamer1')
const gamer2Name = document.querySelector('input#gamer2')
const gamer1Place = document.querySelector('span#gamer1place')
const gamer2Place = document.querySelector('span#gamer2place')
const modalActive = 'appear'
const bodyShadowEffect = 'blur'


const removeModal = () => {
    if(modal.classList.contains(modalActive)){
        modal.classList.remove(modalActive)
        BODY.classList.remove(bodyShadowEffect)

        if (gamer1Name.value !== '') {
            gamer1Place.textContent = gamer1Name.value
        }

        if (gamer2Name.value !== '') {
            gamer2Place.textContent = gamer2Name.value
        }
    }
}

window.onload = () => {
    modal.classList.add(modalActive);
    BODY.classList.add(bodyShadowEffect)
}

let Game = new TicTacToo(grille, scorePlayer1, scorePlayer2)
Game.setGame(circle, croix);
button.addEventListener('click', () => Game.initialisation())
startButton.addEventListener('click', () => removeModal())
