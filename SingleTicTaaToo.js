
class SingleTicTaaToo extends TicTacToo
{
    computerParty = true
    winner = false
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
                            this.winner = true
                            this.Animation(true, el)
                            this.incrementScore(this.scorePlayer1);
                            this.pauseParty()

                            this.computerParty = false
                            setTimeout(() => {
                                this.computerParty = true
                            }, 1000)
                        }
                    })

                    if (this.player1.length  < 5) {
                        setTimeout(() => {
                            this.computerPlay()
                        }, 500)
                    }
                }

                if (this.player1.length > 4) {
                    setTimeout(() => {
                        this.initialisation(true);
                    }, 1000)
                }

            })
        })
    }


    computerPlay () {
        // Returns a random integer from 0 to 10:
        let el = '';
        let number = 9
        if (this.computerParty === false || this.color[this.color.length - 1] === circle) return;

        if (this.player2.length <= 4) {
            let winComputerCombination = []
            let winComputerNumbers = []

            let lastComputerPlay = this.player2[this.player2.length - 1]
            if (lastComputerPlay !== undefined) {

                this.WIN_COMBINATION.forEach(combination => {
                    combination.forEach(el => {
                        if(lastComputerPlay === el){
                            winComputerCombination.push(combination)
                        }
                    })
                })

                winComputerCombination.forEach(computerCanWin => {
                    computerCanWin.forEach(computerCanWinNumber => {
                        if (computerCanWinNumber !== lastComputerPlay) {
                            let el = this.grille[computerCanWinNumber]
                            if (!el.classList.contains('take')) {
                                winComputerNumbers.push(computerCanWinNumber)
                            }
                        }
                    })
                })

                let i = 0;

                do {
                    number = winComputerNumbers[i]
                    console.log(number)
                    el = this.grille[number]
                } while (el.classList.contains('take'))

            } else {
                do {
                    number = parseInt(Math.floor(Math.random() * 9));
                    el = this.grille[number]
                } while (el.classList.contains('take'))
            }
        } else {
            return;
        }

        if (el !== '' && number < 9) {
            this.insertMotif(croix, el)
            this.player2.push(number)
            this.WIN_COMBINATION.forEach(el => {
                if (this.validation(el, this.player2)) {
                    this.Animation(false, el)
                    this.incrementScore(this.scorePlayer2)
                    this.pauseParty()
                }
            })

            if (this.player2.length > 4) {
                setTimeout(() => {
                    this.initialisation(false)
                }, 1000)
            }
        }
        this.computerParty = true
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
            setTimeout(() => {
                this.computerPlay()
            }, 500)

        }
        this.player1 = []
        this.player2 = []
    }
}




