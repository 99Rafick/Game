const grille = document.querySelectorAll('.case')
const scorePlayer1 = document.querySelector('.score_player1')
const scorePlayer2 = document.querySelector('.score_player2')
const BODY = document.querySelector('body')
const circle = 'motif1'
const croix = 'motif2'
const button = document.querySelector('.button button')
const modal = document.querySelector('.modal')
const startButton = document.querySelector('.modal .start')
const gamerName = document.querySelector('input#gamer')
const gamerPlace = document.querySelector('span#gamerplace')
const modalActive = 'appear'
const bodyShadowEffect = 'blur'


const removeModal = () => {
    if(modal.classList.contains(modalActive)){
        modal.classList.remove(modalActive)
        BODY.classList.remove(bodyShadowEffect)

        if (gamerName.value !== '') {
            gamerPlace.textContent = gamerName.value
        }


    }
}

window.onload = () => {
    modal.classList.add(modalActive);
    BODY.classList.add(bodyShadowEffect)
}

let Game = new SingleTicTaaToo(grille, scorePlayer1, scorePlayer2)
Game.setGame(circle, croix);
button.addEventListener('click', () => Game.initialisation())
startButton.addEventListener('click', () => removeModal())
