
class TicTacToo
{
    constructor(grille, scorePlayer1, scorePlayer2)
    {
        this.grille = grille
        this.scorePlayer1 = scorePlayer1
        this.scorePlayer2 = scorePlayer2
        this.WIN_COMBINATION = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        this.color = [];
        this.player1 = []
        this.player2 = []
        this.stop = false
    }

    setGame(circle, croix)
    {
        this.color = [circle]
        this.grille.forEach((el, k) => {
            el.addEventListener('click', () => {

                if (el.classList.contains('take') || this.stop) return;

                if (this.color[this.color.length - 1] === circle) {
                    this.insertMotif(circle, el)
                    this.player1.push(k)
                    this.WIN_COMBINATION.forEach(el => {
                        if (this.validation(el, this.player1)) {
                            this.Animation(true, el)
                            this.incrementScore(this.scorePlayer1);
                            this.pauseParty()
                        }
                    })

                } else {
                    this.insertMotif(croix, el)
                    this.player2.push(k)
                    this.WIN_COMBINATION.forEach(el => {
                        if (this.validation(el, this.player2)) {
                            this.Animation(false, el)
                            this.incrementScore(this.scorePlayer2)
                            this.pauseParty()
                        }
                    })

                }
                if (this.player2.length > 4 || this.player1.length > 4) {
                    setTimeout(() => {
                        this.initialisation();
                    }, 1000)
                }
            })
        })
    }

    validation(tab1, tab2)
    {
        const ok = [];
        for(let k = 0; k < tab1.length; k++){

            for(let i = 0; i < tab2.length; i++){
                if(tab1[k] === tab2[i]){
                    ok.push('ok')
                }
            }
        }
        if (ok.length >= 3) return true;
    }

    insertMotif(choice, el)
    {
        let motif = document.createElement('div')
        motif.setAttribute('class', choice)
        el.classList.add('take')
        if (choice === 'motif1') {
            this.color.push('motif2')
        } else {
            this.color.push('motif1')
        }
        el.appendChild(motif)
    }


    addAnimation(grille, el)
    {
        let multiply = 1
        grille.forEach((element, k) => {
            for (let i = 0; i < el.length; i++)  {
                let elementDiv = element.querySelector('div')
                if (k === el[i]) {
                    elementDiv.style.animationDelay = (100 * multiply) + 'ms'
                    element.classList.add('animate')
                    multiply++
                }
            }
        })
    }

    removeAnimation(grille, el)
    {
        grille.forEach((element, k) => {
            for (let i = 0; i < el.length; i++)  {
                if (k === el[i]) {
                    element.classList.remove('animate')
                }
            }
        })
    }

    incrementScore(scorePlayer)
    {
        let score = parseInt(scorePlayer.textContent);
        score = score + 1;
        scorePlayer.textContent = score;
    }


    initialisation(winner)
    {
        this.grille.forEach(el => {
            let div = el.firstChild;
            if(div != null){
                el.removeChild(div)
            }
            if(el.classList.contains('take')){
                el.classList.remove('take');
            }
        })

        if(winner) {
            this.color = [circle]
        }else {
            this.color = [croix]
        }

        this.player1 = []
        this.player2 = []
    }

    pauseParty ()
    {
        this.stop = true
        setTimeout(() => {
            this.stop = false
        }, 1000)
    }


    Animation (boolean, el)
    {
        //console.log(el)
        this.addAnimation(this.grille, el)
        setTimeout( () => {
            this.removeAnimation(this.grille, el)
            this.initialisation(boolean);
        }, 900)
    }

}




